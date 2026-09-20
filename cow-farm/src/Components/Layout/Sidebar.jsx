import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { NAVIGATION } from "../../config/navigation";
import { useLanguage } from "../../hooks/useLanguage";

// onNavigate: কোনো menu-তে চাপলে যা করতে হবে (Mobile-এ drawer বন্ধ করা)
// onClose: দিলে ✕ বোতাম দেখাবে (শুধু Mobile drawer-এ দেওয়া হবে)
function Sidebar({ onNavigate, onClose }) {
    const { t } = useLanguage();

    return (
        <div className="flex h-full flex-col">
            {/* উপরের logo অংশ */}
            <div className="flex h-16 shrink-0 items-center gap-2 border-b border-line px-5">
                <span className="text-2xl">🐄</span>
                <span className="min-w-0 font-bold leading-tight text-primary">
                    {t("app.name")}
                </span>

                {onClose && (
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label={t("layout.closeMenu")}
                        title={t("layout.closeMenu")}
                        className="ml-auto inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-muted transition-colors hover:bg-background hover:text-content"
                    >
                        <FiX size={18} />
                    </button>
                )}
            </div>

            {/* menu তালিকা */}
            <nav className="flex-1 overflow-y-auto px-3 py-4">
                {NAVIGATION.map((section) => (
                    <div key={section.id} className="mb-4">
                        {section.titleKey && (
                            <p className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-muted">
                                {t(section.titleKey)}
                            </p>
                        )}

                        <ul className="space-y-1">
                            {section.items.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <li key={item.id}>
                                        <NavLink
                                            to={item.path}
                                            end={item.end}
                                            onClick={onNavigate}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                                                    isActive ?
                                                        "bg-primary text-on-primary"
                                                    :   "text-content hover:bg-background"
                                                }`
                                            }
                                        >
                                            <Icon className="h-4 w-4 shrink-0" />
                                            <span>{t(item.labelKey)}</span>
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </nav>
        </div>
    );
}

export default Sidebar;
