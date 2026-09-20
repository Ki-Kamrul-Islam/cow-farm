import {
    FaCow,
    FaDroplet,
    FaCartShopping,
    FaWallet,
    FaWheatAwn,
    FaSeedling,
    FaChartLine,
} from "react-icons/fa6";
import { FiInfo } from "react-icons/fi";
import StatCard from "../components/dashboard/StatCard";
import { useLanguage } from "../hooks/useLanguage";
import { useFormatters } from "../hooks/useFormatters";
import { useDashboardSummary } from "../hooks/useDashboardSummary";

function DashboardPage() {
    const { t } = useLanguage();
    const { formatNumber, formatCurrency, formatDate } = useFormatters();
    const summary = useDashboardSummary();

    // ৭টি card-এর তালিকা। একই StatCard ৭ বার লেখার বদলে তালিকা থেকে map করব।
    const cards = [
        {
            id: "totalCows",
            label: t("dashboard.totalCows"),
            value: formatNumber(summary.totalCows),
            icon: FaCow,
            tone: "primary",
        },
        {
            id: "todayMilk",
            label: t("dashboard.todayMilk"),
            value: formatNumber(summary.todayMilk),
            unit: t("units.liter"),
            icon: FaDroplet,
            tone: "info",
        },
        {
            id: "todaySales",
            label: t("dashboard.todaySales"),
            value: formatCurrency(summary.todaySales),
            icon: FaCartShopping,
            tone: "success",
        },
        {
            id: "todayExpense",
            label: t("dashboard.todayExpense"),
            value: formatCurrency(summary.todayExpense),
            icon: FaWallet,
            tone: "danger",
        },
        {
            id: "availableFeed",
            label: t("dashboard.availableFeed"),
            value: formatNumber(summary.availableFeed),
            unit: t("units.kg"),
            icon: FaWheatAwn,
            tone: "warning",
        },
        {
            id: "availableLand",
            label: t("dashboard.availableLand"),
            value: formatNumber(summary.availableLand),
            unit: t("units.acre"),
            icon: FaSeedling,
            tone: "secondary",
        },
        {
            id: "monthlyProfit",
            label: t("dashboard.monthlyProfit"),
            value: formatCurrency(summary.monthlyProfit),
            icon: FaChartLine,
            // লাভ হলে সবুজ, ক্ষতি হলে লাল
            tone: summary.monthlyProfit >= 0 ? "success" : "danger",
        },
    ];

    return (
        <div>
            {/* শিরোনাম ও আজকের তারিখ */}
            <h1 className="text-2xl font-bold text-content">
                {t("nav.dashboard")}
            </h1>
            <p className="mt-1 text-sm text-muted">
                {t("dashboard.subtitle")} · {formatDate(new Date())}
            </p>

            {/* নমুনা data-র সতর্কতা (আসল data এলে এটা মুছে ফেলব) */}
            <div className="mt-4 flex items-start gap-2 rounded-lg border border-info/30 bg-info/10 px-4 py-3 text-sm text-info">
                <FiInfo className="mt-0.5 shrink-0" />
                <p>{t("dashboard.demoNote")}</p>
            </div>

            {/* Responsive grid: Mobile ১, Tablet ২, Laptop ৩, বড় Desktop ৪ কলাম */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cards.map((card) => (
                    <StatCard
                        key={card.id}
                        label={card.label}
                        value={card.value}
                        unit={card.unit}
                        icon={card.icon}
                        tone={card.tone}
                    />
                ))}
            </div>
        </div>
    );
}

export default DashboardPage;
