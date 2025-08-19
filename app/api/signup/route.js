import '@/lib/db'
import { NextResponse as res } from "next/server"
import UserSchema from '@/schema/user.schema'
 
export const POST = async(request)=>{
    try {
        const body = await request.json() // yai promise return karta hai islyai await lagaya hai
        return res.json(body)
    } catch (err) {
        console.log(err);
        
    }
}