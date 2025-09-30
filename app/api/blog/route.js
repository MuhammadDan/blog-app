import Blog from "@/schema/blog.schema";
import dbConnect  from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (request) =>{
    try {
        await dbConnect();

        const body = await request.json()
        const blog = new Blog(body)
        await blog.save();

        return NextResponse.json(blog)
    } catch (err) {
        console.error("Error in POST /api/blog:", err);
        return NextResponse.json(
            {success: false, message: err.message},
            {status: 500}
        );
    }
}

export const GET = async (request) =>{
    try {
        await dbConnect();

        const blogs = await Blog.find().sort({createdAt: -1})
        return NextResponse.json(blogs)
    } catch (err) {
        console.error("Error in GET /api/blog:", err);
        return NextResponse.json(
            {success: false, message: err.message},
            {status: 500}
        )
    }
}