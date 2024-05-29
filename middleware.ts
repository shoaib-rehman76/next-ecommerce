import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// const protectedRoutes = ["/"]; // Example routes to protect

// export default clerkMiddleware((auth, req) => {
//   console.log(auth(), "auth");

//   // Optionally check for specific routes to protect
//   if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
//     auth().protect(); // Protect these routes
//   }
// });

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/:path*",
]);

export default clerkMiddleware((auth, request) => {
  //   if (!isPublicRoute(request)) {
  //     auth().protect();
  //   }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
