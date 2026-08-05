import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ba", "en"],
  defaultLocale: "ba",
});

export const config = {
  matcher: [
    "/",
    "/(ba|en)/:path*"
  ],
}; 