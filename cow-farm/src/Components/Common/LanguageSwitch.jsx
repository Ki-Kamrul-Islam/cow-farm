import { LANGUAGES } from "../../constants/languages";
import { useLanguage } from "../../hooks/useLanguage";

function LanguageSwitch() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <div
            role="group"
            aria-label={t("language.switch")}
            className="inline-flex rounded-full border border-line bg-surface p-1"
        >
            {LANGUAGES.map((item) => {
                const isActive = item.code === language;

                return (
                    <button
                        key={item.code}
                        type="button"
                        onClick={() => setLanguage(item.code)}
                        aria-pressed={isActive}
                        className={`cursor-pointer rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                            isActive ?
                                "bg-primary text-on-primary"
                            :   "text-muted hover:text-content"
                        }`}
                    >
                        {item.label}
                    </button>
                );
            })}
        </div>
    );
}

export default LanguageSwitch;
