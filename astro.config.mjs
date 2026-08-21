import { defineConfig } from "astro/config";

// Radhamadhav Medical Hall — static marketing site.
// Deployed via Vercel's git integration (see vercel.json + README).
export default defineConfig({
  site: "https://radhamadhavmedicalhall.example.com",
  output: "static",
  compressHTML: true,
  build: {
    format: "directory",
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ne", "bn"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
