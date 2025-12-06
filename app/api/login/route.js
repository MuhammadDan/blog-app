// app/api/login/route.js
import dbConnect from "@/lib/db";
import UserSchema from "@/schema/user.schema";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

// Helper: Generate both tokens
const generateTokens = (payload) => {
  if (!ACCESS_TOKEN_SECRET || !REFRESH_TOKEN_SECRET) {
    throw new Error("JWT secrets are not defined in .env.local");
  }

  const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
  const refreshToken = jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });

  return { accessToken, refreshToken };
};

export const POST = async (request) => {
  try {
    await dbConnect();

    const { email, password } = await request.json();

    // Find user
    const user = await UserSchema.findOne({ email }).select("+password"); // include password if select: false in schema
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Payload for JWT
    const payload = {
      fullname: user.fullname,
      email: user.email,
      // you can add id: user._id if needed later
    };

    // Generate tokens
    const { accessToken, refreshToken } = generateTokens(payload);

    // Success response
    const response = NextResponse.json(
      {
        success: true,
        message: "Login successful",
        user: {
          fullname: user.fullname,
          email: user.email,
        },
      },
      { status: 200 }
    );

    // Set httpOnly cookies
    const isProduction = process.env.PROD === "true";

    response.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
      path: "/",
      maxAge: 15 * 60, // 15 minutes
    });

    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
};