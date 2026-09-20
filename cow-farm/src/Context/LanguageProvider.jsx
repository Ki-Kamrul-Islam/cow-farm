import { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { storageService } from "../services/storageService";
import { STORAGE_KEYS } from "../constants/storageKeys";
import { DEFAULT_LANGUAGE, isSupportedLanguage } from "../constants/languages";
import { translate } from "../i18n/translate";

// শুরুতে কোন ভাষা হবে: আগে save করা থাকলে সেটা, নইলে default (বাংলা)
function getInitialLanguage() {
    const saved = storageService.get(STORAGE_KEYS.language);
    return isSupportedLanguage(saved) ? saved : DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }) {
    const [language, setLanguageState] = useState(getInitialLanguage);

    // ভাষা বদলালে: <html lang>, tab-এর নাম এবং LocalStorage আপডেট করো
    useEffect(() => {
        document.documentElement.lang = language;
        document.title = translate(language, "app.name");
        storageService.set(STORAGE_KEYS.language, language);
    }, [language]);

    // শুধু সমর্থিত ভাষা হলেই বদলাবে
    const setLanguage = (code) => {
        if (isSupportedLanguage(code)) setLanguageState(code);
    };

    // t('theme.light') → বর্তমান ভাষার লেখা
    const t = (key, params) => translate(language, key, params);

    const value = {
        language, // 'bn' অথবা 'en'
        setLanguage,
        t,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}
