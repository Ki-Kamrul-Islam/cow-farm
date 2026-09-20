import LanguageSwitch from "../common/LanguageSwitch";
import ThemeToggle from "../common/ThemeToggle";
import { useLanguage } from "../../hooks/useLanguage";

function Navbar() {
    const { t } = useLanguage();

    return (
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-line bg-surface px-4 sm:px-6">
            {/* Sidebar লুকানো থাকে এমন ছোট screen-এ app-এর নাম দেখাবে */}
            <p className="min-w-0 truncate font-bold text-primary lg:hidden">
                🐄 {t("app.name")}
            </p>

            {/* ডানে ভাষা ও theme বোতাম */}
            <div className="ml-auto flex items-center gap-2">
                <LanguageSwitch />
                <ThemeToggle />
            </div>
        </header>
    );
}

export default Navbar;
