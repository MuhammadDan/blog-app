import { NextResponse } from "next/server";
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
        body: JSON.stringify({token: cookies}),
        headers: {
            'Content-type': 'application/json'
        }
    })
    console.log(api);
    
};
