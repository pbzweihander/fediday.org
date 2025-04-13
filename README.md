# fediday.org - the Federated Fediverse Day

## What?

We celebrate every memorable day related to the Fediverse.

## Why?

A user mentioned "Why there is no Fediverse Day?" ([link](https://yuri.garden/notes/a6fudw931d)).
And then other users decided to celebrate the that day as the Fediverse Day ([link1](https://uri.life/@dazeemdas/114317410597152387), [link2](https://planet.moe/@robin_maki/114317413994515299)).

## Contribution

### Adding a day

Add a YAML file to `src/data/day`, Or create a new issue describing the day.

### Adding a translation

1. Modify `locales` field in `astro.config.mjs`
2. Modify `multiLanguageObject` zod object definition in `src/types.ts`
3. Add `src/pages/<locale>/index.astro`, with `<locale>` in lowercase ([This is quirk of astro i18n](https://docs.astro.build/en/reference/modules/astro-i18n/#getrelativelocaleurl))
   - Make sure you use proper `<Days lang="<locale>" />` in `index.astro`!
4. Update `src/data/day/README.md` for 'supported languages'
5. (Optional) Add translation of names and descriptions of the days in `src/data/day`

### Design

WE NEED GRAPHICS DESIGNER PLZ HELP

### Others

Feel free to contribute anything!
