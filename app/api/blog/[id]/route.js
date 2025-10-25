import '@/lib/db';
import Blog from "@/schema/blog.schema";
import mongoose from 'mongoose';
import { NextResponse } from "next/server";

const isId = (id)=>{
   return mongoose.Types.ObjectId.isValid(id); // ye check karne kai liye kai id valid hai ya nahi
}

export const PUT = async (request, { params }) => {
  try {
    const body = await request.json();
    const blogd = await Blog.findByIdAndUpdate(params.id, body, { new: true });

    if (!blogd) {
      return NextResponse.json(
        { success: false, message: 'Id not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(blogd);
  } catch (err) {}
  return NextResponse.json({ success: true });
};

export const DELETE = async (request, { params }) => {
  try {
    const blogd = await Blog.findByIdAndDelete(params.id);

    if (!blogd) {
      return NextResponse.json(
        { success: false, message: 'Id not found'},
        { status: 404 }
      );
    }
    return NextResponse.json(blogd);
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};

export const GET = async (request, { params }) => {
  try {
    const isMongoId = isId(params.id); // ye check karne kai liye kai id valid hai ya nahi
    // console.log(id);
    const query = (isMongoId ? {_id: params.id} : {title: params.id.split("-").join(" ")})
    const blogd = await Blog.findOne(query);

    if (!blogd) {
      return NextResponse.json(
        { success: false, message: 'Id not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(blogd);
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};
