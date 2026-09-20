import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

// যেকোনো component-এ: const { t, language, setLanguage } = useLanguage()
export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage অবশ্যই <LanguageProvider>-এর ভেতরে ব্যবহার করতে হবে",
        );
    }

    return context;
}
