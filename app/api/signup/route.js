import '@/lib/db'
import UserSchema from '@/schema/user.schema'
import { NextResponse as res } from "next/server"

 
export const POST = async(request)=>{
    try {
        const body = await request.json()
        const user = new UserSchema(body)
        await user.save() 
        return res.json(user)
        // return res.json(body)
    } catch (err) {
        // console.log(err);
        return res.json(
            {success: false, message: err.message},
            {status: 500}
        )
    }
}

// export const GET = async () => {
//   return res.json({ message: "Signup API is working. Use POST method to send data." })
// }
// yai promise return karta hai islyai await lagaya hai 

//   const user = new UserSchema(body) --> jo data userSchema mai save hoa hoga wo res.json ki help sai retun hojyega  
//        await user.save() 
 //       return res.json(user)