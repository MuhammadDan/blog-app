export const config = {
    matcher: '/admin/:path*',
}
export const middleware = (request) => {
    console.log("Welcome to Middleware");
    
}