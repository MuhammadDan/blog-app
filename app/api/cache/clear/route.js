import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

export const POST = async (req)=>{
    // revalidatePath('/article'); // jis path ko revalidate karna hai wo yaha dai ga
    const body = await req.json();
    console.log(body);
    const data = body.paths.map((item)=>{
       revalidatePath(item); // jis path ko revalidate karna hai wo yaha dai ga
        return {
         path: item,
        deletedAt: Date.now()
       }
    })
    return NextResponse.json(data)
}

// abhi mai nai jitna bhi code kiya usai jina bhi path behjai gai wo sab array of object mai ban jyega.