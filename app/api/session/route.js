import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export const POST = async (request)=>{
    try {
        const {token} = await request.json();
        const session = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        return NextResponse.json(session);

    } catch (error) {
        return resizeBy.json(
            {success: false},
            {status: 401}
        )
    }
}