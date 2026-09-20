// Website-এ কোন কোন ভাষা আছে, সেই তালিকা এক জায়গায়।
// ভবিষ্যতে নতুন ভাষা (যেমন হিন্দি) যোগ করতে এখানে এক লাইন লিখলেই বোতামে চলে আসবে।

// Website-এ কোন কোন ভাষা আছে, সেই তালিকা এক জায়গায়।
// locale = সংখ্যা ও তারিখ সাজানোর নিয়ম (Intl-এর জন্য)

export const LANGUAGES = [
    { code: "bn", label: "বাংলা", locale: "bn-BD" },
    { code: "en", label: "English", locale: "en-IN" },
];

export const DEFAULT_LANGUAGE = "bn";

export function isSupportedLanguage(code) {
    return LANGUAGES.some((language) => language.code === code);
}

// ভাষার কোড থেকে locale বের করে। যেমন getLocale('bn') → 'bn-BD'
export function getLocale(code) {
    return (
        LANGUAGES.find((language) => language.code === code)?.locale ?? "en-IN"
    );
}
