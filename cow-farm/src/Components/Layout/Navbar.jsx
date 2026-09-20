import { FiMenu } from "react-icons/fi";
import LanguageSwitch from "../common/LanguageSwitch";
import ThemeToggle from "../common/ThemeToggle";
import { useLanguage } from "../../hooks/useLanguage";

// onMenuClick: ☰ বোতাম চাপলে যা করতে হবে (MainLayout থেকে আসে)
function Navbar({ onMenuClick }) {
    const { t } = useLanguage();

    return (
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-line bg-surface px-4 sm:px-6">
            {/* ☰ বোতাম: শুধু ছোট screen-এ (Sidebar যখন লুকানো) */}
            <button
                type="button"
                onClick={onMenuClick}
                aria-label={t("layout.openMenu")}
                title={t("layout.openMenu")}
                className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line bg-surface text-content transition-colors hover:bg-background lg:hidden"
            >
                <FiMenu size={18} />
            </button>

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
