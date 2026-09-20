import { translations } from "./translations";

// 'theme.light' এই লেখা ধরে ধরে object-এর ভেতরে ঢোকে
function getByPath(object, path) {
    return path.split(".").reduce((current, part) => current?.[part], object);
}

// 'Hello {name}' + { name: 'Rahim' } → 'Hello Rahim'
// params-এ না থাকা নাম যেমন আছে তেমনই থাকে
function fillParams(text, params) {
    if (!params) return text;
    return text.replace(/\{(\w+)\}/g, (match, name) =>
        params[name] !== undefined ? String(params[name]) : match,
    );
}

export function translate(language, key, params) {
    // ১. বর্তমান ভাষায় খোঁজো
    const text = getByPath(translations[language], key);
    if (typeof text === "string") return fillParams(text, params);

    // ২. না পেলে English-এ খোঁজো
    const fallback = getByPath(translations.en, key);
    if (typeof fallback === "string") return fillParams(fallback, params);

    // ৩. কোথাও না পেলে key-টাই দেখাও এবং developer-কে সতর্ক করো
    if (import.meta.env.DEV) {
        console.warn(`[i18n] Missing translation: "${key}"`);
    }
    return key;
}
