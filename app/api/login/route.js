import { NextResponse as res } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const user = await UserSchema.findOne({email: email})
    if(!user){
        return res.json(
            {success: false, message: "User doesn't exist"},
            {status: 404}
        )
    } // yai to password ager match nahi kiya
    
  } catch (err) {
    return res.json({ success: false }, { status: 500 });
  }
};
