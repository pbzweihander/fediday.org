import { z } from "astro:content";

const multiLanguageObject = z.object({
  en: z.string(),
  ko: z.string().optional(),
  // Add new locale here
});
export const languages = multiLanguageObject.keyof();
export const day = z.object({
  date: z.string().date(),
  link: z.string().url().optional(),
  name: multiLanguageObject,
  description: multiLanguageObject.optional(),
});
