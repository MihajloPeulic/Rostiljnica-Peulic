import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ba", "en"],
  defaultLocale: "ba",
  localeDetection: false,
});

export const config = {
  matcher: [
    "/",
    "/(ba|en)/:path*"
  ],
}; 