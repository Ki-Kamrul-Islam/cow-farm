import { getNavItem } from "../../config/navigation";
import { useLanguage } from "../../hooks/useLanguage";

// আসল module তৈরির আগ পর্যন্ত প্রতিটি page-এ এটাই দেখাবে।
// id দিলে menu-এর নাম ও icon নিজে নিজে খুঁজে নেয়।
function PlaceholderPage({ id }) {
    const { t } = useLanguage();
    const item = getNavItem(id);
    const Icon = item.icon;

    return (
        <div>
            <h1 className="text-2xl font-bold text-content">
                {t(item.labelKey)}
            </h1>

            <div className="mt-6 flex flex-col items-center rounded-2xl border border-dashed border-line bg-surface px-6 py-16 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon size={26} />
                </span>
                <p className="mt-4 text-muted">{t("common.comingSoon")}</p>
            </div>
        </div>
    );
}

export default PlaceholderPage;
