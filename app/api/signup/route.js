import '@/lib/db'
import UserSchema from '@/schema/user.schema'
import { NextResponse as res } from "next/server"

 
export const POST = async(request)=>{
    try {
        const body = await request.json() 
        return res.json(body)
    } catch (err) {
        console.log(err);
        
    }
}

// export const GET = async () => {
//   return res.json({ message: "Signup API is working. Use POST method to send data." })
// }
// yai promise return karta hai islyai await lagaya hai