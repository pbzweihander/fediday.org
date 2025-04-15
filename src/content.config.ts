import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import * as types from "@types";

const days = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/data/day" }),
  schema: types.day,
});

export const collections = { days };
