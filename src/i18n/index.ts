import { ui, type UiKey } from "./ui";

export type Lang = "en" | "ne" | "bn";
export const langs: Lang[] = ["en", "ne", "bn"];
export const defaultLang: Lang = "en";

export const langMeta: Record<
  Lang,
  { label: string; short: string; name: string; htmlLang: string }
> = {
  en: { label: "English", short: "EN", name: "English", htmlLang: "en" },
  ne: { label: "नेपाली", short: "ने", name: "Nepali", htmlLang: "ne" },
  bn: { label: "বাংলা", short: "বাং", name: "Bengali", htmlLang: "bn" },
};

/** A string that exists in every language. */
export type L = Record<Lang, string>;

export function getLang(locale: string | undefined): Lang {
  return (langs as string[]).includes(locale ?? "") ? (locale as Lang) : defaultLang;
}

export function useT(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui.en[key];
}

/** Pick the right language from a multilingual field, falling back to English. */
export function l(field: L | string, lang: Lang): string {
  if (typeof field === "string") return field;
  return field[lang] || field.en;
}

/** `/doctors/` -> `/ne/doctors/` (English is unprefixed). */
export function localePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === "/" ? "/" : clean}`;
}

/** Strip a locale prefix so the same page can be linked in another language. */
export function stripLocale(pathname: string): string {
  for (const lang of langs) {
    if (lang === defaultLang) continue;
    if (pathname === `/${lang}` || pathname === `/${lang}/`) return "/";
    if (pathname.startsWith(`/${lang}/`)) return pathname.slice(lang.length + 1);
  }
  return pathname || "/";
}
