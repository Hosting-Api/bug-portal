
import withAuth from "next-auth/middleware";
// import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";
import { NextResponse } from "next/server";

// export {default}  from "next-auth/middleware";
export default withAuth(
    function middleware (req) {
       if(req.nextUrl.pathname.startsWith("/admin/dashboard") 
        && req.nextauth.token?.role !== "admin")
        {
       
        return NextResponse.redirect(new URL("/admin/", req.url));
       }

       if(req.nextUrl.pathname.startsWith("/edit") 
        && req.nextauth.token?.role !== "user")
        {
       
        return NextResponse.redirect(new URL("/admin/edit", req.url));
       }


       if(req.nextUrl.pathname.startsWith("/bugpage/new") 
        && req.nextauth.token?.role !== "admin")
        {
       
        return NextResponse.redirect(new URL("/admin/", req.url));
       }
      
       if(req.nextUrl.pathname.startsWith("/adduser") 
        && req.nextauth.token?.role !== "admin")
        {
       
        return NextResponse.redirect(new URL("/admin/", req.url));
       }
    },
   { callbacks: {
        // authorized: ({ token }) => token?.role === "admin",
        authorized: ({ token }) => !! token,
      }
    }
)

export const config = { matcher: ["/dashboard", "/adduser" ] }
// export const config = { matcher: ["/dashboard", "/admin/dashboard", "/adduser", '/admin/edit', "/bugpage/new" ] }
