import { NextResponse } from "next/server";
const SEVENDAYS = (7*24*60*60)
export const config = {
  matcher: "/admin/:path*",
};
export const middleware = async (request) => {
  console.log("cookies");
  const cookies = request.cookies.get("accessToken");
  if(!cookies){
     return NextResponse.redirect(new URL('/login', request.url))
  }
    // console.log(cookies); 
    const api = await fetch(`${process.env.SERVER}/api/session`, {
        method: 'post',
        body: JSON.stringify({token: cookies.value}),
        headers: {
            'Content-type': 'application/json'
        }
    })
    if(!api.ok){
      return NextResponse.redirect(new URL('/login', request.url))
      
    } 
    const body = await api.json()
    const result = NextResponse.next()
    result.cookies.set("session", JSON.stringify(body), {maxAge:  SEVENDAYS})
    return result;
};
