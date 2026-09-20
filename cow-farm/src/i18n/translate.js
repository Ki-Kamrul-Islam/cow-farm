import { translations } from "./translations";

// 'theme.light' এই লেখা ধরে ধরে object-এর ভেতরে ঢোকে:
// translations.bn → ['theme'] → ['light'] → 'লাইট'
function getByPath(object, path) {
    return path.split(".").reduce((current, part) => current?.[part], object);
}

export function translate(language, key) {
    // ১. বর্তমান ভাষায় খোঁজো
    const text = getByPath(translations[language], key);
    if (typeof text === "string") return text;

    // ২. না পেলে English-এ খোঁজো (বাংলা অনুবাদ বাকি থাকলেও যেন খালি না দেখায়)
    const fallback = getByPath(translations.en, key);
    if (typeof fallback === "string") return fallback;

    // ৩. কোথাও না পেলে key-টাই দেখাও এবং developer-কে সতর্ক করো
    if (import.meta.env.DEV) {
        console.warn(`[i18n] Missing translation: "${key}"`);
    }
    return key;
}
