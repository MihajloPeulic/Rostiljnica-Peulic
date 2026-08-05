import { getRequestConfig } from "next-intl/server";

const locales = ["ba", "en"] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  const validLocale =
    locale && locales.includes(locale as typeof locales[number])
      ? locale
      : "ba";

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default,
  };
});