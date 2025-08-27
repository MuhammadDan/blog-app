import '@/lib/db'
import UserSchema from '@/schema/user.schema'
import { NextResponse as res } from "next/server"

 
export const POST = async(request)=>{
    try {
        const body = await request.json()
        const user = new UserSchema(body)
        await user.save() 
        return res.json({success: true})
        // return res.json(body)
        // hum ko signup hojanai kai bath nahi behjna hai user ka information "res.json(user) " to res.json kai round bracket sai user ko hatai gai or success ki value behjai gai
    } catch (err) {
        // console.log(err);
        return res.json(
            {success: false, message: err.message},
            {status: 500}
        )
    }
}
