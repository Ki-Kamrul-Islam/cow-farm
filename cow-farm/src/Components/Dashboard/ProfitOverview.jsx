import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import Card from "../common/Card";
import { useLanguage } from "../../hooks/useLanguage";
import { useFormatters } from "../../hooks/useFormatters";

const PERIODS = [
    { id: "daily", labelKey: "profit.daily" },
    { id: "weekly", labelKey: "profit.weekly" },
    { id: "monthly", labelKey: "profit.monthly" },
    { id: "yearly", labelKey: "profit.yearly" },
];

function ProfitOverview({ profit }) {
    const { t } = useLanguage();
    const { formatCurrency } = useFormatters();

    return (
        <Card>
            <h2 className="font-semibold text-content">{t("profit.title")}</h2>

            <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {PERIODS.map((period) => {
                    const value = profit[period.id];
                    const isLoss = value < 0;

                    return (
                        <div
                            key={period.id}
                            className="rounded-xl bg-background p-4"
                        >
                            <p className="text-sm text-muted">
                                {t(period.labelKey)}
                            </p>

                            <p
                                className={`mt-1 flex items-center gap-1.5 text-lg font-bold sm:text-xl ${
                                    isLoss ? "text-danger" : "text-success"
                                }`}
                            >
                                {isLoss ?
                                    <FiTrendingDown />
                                :   <FiTrendingUp />}
                                <span className="min-w-0 truncate">
                                    {formatCurrency(value)}
                                </span>
                            </p>

                            <p className="mt-0.5 text-xs text-muted">
                                {isLoss ? t("profit.loss") : t("profit.profit")}
                            </p>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}

export default ProfitOverview;
