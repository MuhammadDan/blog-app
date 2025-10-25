import Blog from "@/schema/blog.schema";
import dbConnect  from "@/lib/db";
import { NextResponse } from 'next/server';

export const GET = async (req)=> {
    // Blog.distinct()// ye mongoose ka method hai jo unique values return karta hai .blog hamesha unique hona chayai repea & duplicate nahi hona chayai matlab slug unique ho bcz duplicate link ko google hate karta hai aik hi url sai multiple links ko catch kalogai na server mai to google usai blacklist kardega.
    const titles = await Blog.distinct("title")// ye title mai se unique title ki list dega array ki form mai
    const slugs = titles.map((item)=>item.split(" ").join("-"))
    return NextResponse.json(slugs);  
}// is ka kaam hoga sarai title ki list dena jisme se slug banega





//  return NextResponse.json(titles);// iskai through all title array mai dekhai 
// Q: What is slug?
// A: Slug ek URL-friendly string hoti hai jo kisi page ya post ka unique identifier hota hai.

// 👉 Example:
// Agar blog ka title hai -> "My First Blog Post"
// to uska slug hota hai → "my-first-blog-post"

// in short:
//    Slug ek readable URL name hota hai jo page ya post ko uniquely identify karta hai 