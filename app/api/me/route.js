import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request) {
  try {
    const accessToken = request.cookies.get("accessToken")?.value;

    if (!accessToken) {
      return NextResponse.json({ loggedIn: false });
    }

    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    return NextResponse.json({
      loggedIn: true,
      user: decoded,
    });

  } catch (error) {
    return NextResponse.json({ loggedIn: false });
  }
}
