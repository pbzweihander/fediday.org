// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://fediday.org",
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: [
      "en",
      "ko",
      "zh-CN",
      // Add new locale here
    ],
    defaultLocale: "en",
  },
  experimental: {
    svg: true,
  },
});
