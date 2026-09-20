import { FiSearch, FiX } from "react-icons/fi";
import { controlClass } from "./formStyles";
import { useLanguage } from "../../hooks/useLanguage";

// value/onChange: Form-এর ঘরের মতোই controlled। onChange সরাসরি লেখা পায় (event নয়)
function SearchBar({ value, onChange, placeholder, className = "" }) {
    const { t } = useLanguage();

    return (
        <div className={`relative ${className}`}>
            <FiSearch
                size={16}
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
                type="text"
                inputMode="search"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder={placeholder}
                aria-label={placeholder}
                className={controlClass(false, "pl-9 pr-9")}
            />

            {/* লেখা থাকলেই ✕ বোতাম */}
            {value && (
                <button
                    type="button"
                    onClick={() => onChange("")}
                    aria-label={t("common.clearSearch")}
                    title={t("common.clearSearch")}
                    className="absolute right-2 top-1/2 inline-flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-muted transition-colors hover:bg-background hover:text-content"
                >
                    <FiX size={14} />
                </button>
            )}
        </div>
    );
}

export default SearchBar;
