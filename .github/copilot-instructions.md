This repository contains a multilingual website celebrating various days related to the Fediverse.

For JavaScript and TypeScript code, use double quotes for strings and follow the project's Prettier configuration.

When working with internationalization (i18n):

- The project currently supports English (en) and Korean (ko) languages
- English is the default and fallback language
- When adding new language support, update these files:
  1. Add the locale to `locales` array in `astro.config.mjs`
  2. Add the locale option to `multiLanguageObject` in `src/types.ts`
  3. Create language-specific pages in `src/pages/<locale>/`
  4. Update `src/data/day/README.md` to list the newly supported language

When adding new days to the Fediverse calendar:

- Add YAML files to `src/data/day` directory
- Follow the format specified in `src/data/day/README.md`
- Ensure dates are in `YYYY-MM-DD` format
- For recurring days without specific years, use `0000` as the year
- Always include English text, even when adding content for other languages
- Provide translations for supported languages when possible

For Astro components:

- Use React-style props with TypeScript interfaces
- Leverage Tailwind CSS for styling
- Follow the existing component patterns in the project

This project uses:

- Astro framework
- TypeScript
- Tailwind CSS
- Markdown/YAML for content
- GitHub Actions for CI/CD
