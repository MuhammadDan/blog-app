import Blog from "@/schema/blog.schema";
import { NextResponse } from "next/server";

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
    const blogd = await Blog.findById(params.id);
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
