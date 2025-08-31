import dbConnect from "@/lib/db";
import UserSchema from "@/schema/user.schema";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { message } from "antd";

// Token generator
const getToken = (payload) => {
  if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new Error("ACCESS_TOKEN_SECRET is not defined in .env.local");
  }

  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "7d",
  });
  return {
    accessToken,
    refreshToken,
  };
};

export const POST = async (request) => {
    try {
      await dbConnect();

      const {email,password} = await request.json();
      const user = await UserSchema.findOne({email});

      if(!user){
        return NextResponse.json(
          {success: false, message: "User doesn't exist"},
          {status: 404}
        );
      }

    const isLogin = await bcrypt.compare(password, user.password);
    
    if(!isLogin){
      return NextResponse.json(
        {success: false, message: "Incorrect password"},
        {status: 401}
      );
    }

    console.log("STEP 2: email & password received", { email, password });
    
    const token = {
      accessToken: jwt.sign(
        { fullname: user.fullname, email: user.email},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '15m'}
      ),
      refreshToken: jwt.sign(
        { fullname: user.fullname, email: user.email},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: '7d'}
      ),
    };
    return NextResponse.json({ success: true,  token}, { status: 200 });
  } catch (err){
    console.error("Error during login:", err);
    return NextResponse.json(
      {success: false, message: err.message},
      {status: 500}
    );
  }
};