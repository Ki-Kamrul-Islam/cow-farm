import Card from "./Card";
import { useLanguage } from "../../hooks/useLanguage";

// সব chart-এর বাক্স: শিরোনাম + ঐচ্ছিক উপশিরোনাম + chart।
// isEmpty = true হলে chart-এর বদলে "কোনো তথ্য নেই" দেখায় (Empty State)।
function ChartCard({
    title,
    subtitle,
    isEmpty = false,
    className = "",
    children,
}) {
    const { t } = useLanguage();

    return (
        // min-w-0: grid-এর ভেতরে chart সরু screen-এ ছোট হতে পারে, বাইরে ছাপিয়ে যায় না
        <Card className={`min-w-0 ${className}`}>
            <h2 className="font-semibold text-content">{title}</h2>
            {subtitle && (
                <p className="mt-0.5 text-sm text-muted">{subtitle}</p>
            )}

            <div className="mt-4">
                {isEmpty ?
                    <div className="flex h-48 items-center justify-center rounded-lg border border-dashed border-line text-sm text-muted">
                        {t("charts.noData")}
                    </div>
                :   children}
            </div>
        </Card>
    );
}

export default ChartCard;
