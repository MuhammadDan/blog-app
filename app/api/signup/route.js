import { NextResponse as res } from "next/server"
 
export const GET = ()=>{
    return res.json({success: true})
}