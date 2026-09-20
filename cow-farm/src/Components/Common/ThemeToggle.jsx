import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../hooks/useTheme";
import { useLanguage } from "../../hooks/useLanguage";

function ThemeToggle() {
    const { isDark, toggleTheme } = useTheme();
    const { t } = useLanguage();

    const label = isDark ? t("theme.switchToLight") : t("theme.switchToDark");

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={label}
            title={label}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line bg-surface text-content transition-colors hover:bg-background"
        >
            {isDark ?
                <FiSun size={18} />
            :   <FiMoon size={18} />}
        </button>
    );
}

export default ThemeToggle;
