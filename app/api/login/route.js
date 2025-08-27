import UserSchema from "@/schema/user.schema";
import { NextResponse as res } from "next/server";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const getToken = (payload)=>{
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
  const refreshToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '7d'})
   return{
    accessToken,
    refreshToken
   }
}

export const POST = async (request) => {
  try {
    const {email, password} = await request.json();
    const user = await UserSchema.findOne({email})
    if(!user){
        return res.json(
            {success: false, message: "User doesn't exist"},
            {status: 404}
        ) // yai to password ager match nahi kiya
      }
        const isLogin = await bcrypt.compare(password, user.password);

        if(!isLogin){
          return res.json(
            {success: false, message: 'Incorrect password'},
            {status: 401}
          ) 
        }
        getToken()
        return res.json({success: true})  
  } catch (err) {
    return res.json({ success: false }, { status: 500 });
  }
};

