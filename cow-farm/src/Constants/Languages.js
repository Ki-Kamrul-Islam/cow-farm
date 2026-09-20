// Website-এ কোন কোন ভাষা আছে, সেই তালিকা এক জায়গায়।
// ভবিষ্যতে নতুন ভাষা (যেমন হিন্দি) যোগ করতে এখানে এক লাইন লিখলেই বোতামে চলে আসবে।

export const LANGUAGES = [
    { code: "bn", label: "বাংলা" },
    { code: "en", label: "English" },
];

export const DEFAULT_LANGUAGE = "bn";

export function isSupportedLanguage(code) {
    return LANGUAGES.some((language) => language.code === code);
}
