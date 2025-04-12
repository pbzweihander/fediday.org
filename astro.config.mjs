// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: [
      "en",
      "ko",
      // Add new locale here
    ],
    defaultLocale: "en",
  },
  experimental: {
    svg: true,
  },
});
