import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import ChartCard from "../common/ChartCard";
import {
    CATEGORY_COLORS,
    CHART_COLORS,
    TOOLTIP_PROPS,
} from "../../config/chartTheme";
import { useLanguage } from "../../hooks/useLanguage";
import { useFormatters } from "../../hooks/useFormatters";

// data: [{ category: 'feed', amount: 185000 }, ...]
function ExpenseChart({ data, className = "" }) {
    const { t } = useLanguage();
    const { formatNumber, formatCurrency } = useFormatters();

    const total = data.reduce((sum, item) => sum + item.amount, 0);

    const chartData = data.map((item, index) => ({
        id: item.category,
        name: t(`expenseCategory.${item.category}`),
        value: item.amount,
        // রঙের তালিকা ফুরিয়ে গেলে আবার প্রথম থেকে শুরু (% = ভাগশেষ)
        color: CATEGORY_COLORS[index % CATEGORY_COLORS.length],
    }));

    return (
        <ChartCard
            title={t("charts.expenseTitle")}
            subtitle={t("charts.expenseSubtitle")}
            isEmpty={total === 0}
            className={className}
        >
            <div className="flex flex-col items-center gap-4 sm:flex-row">
                {/* ডোনাট chart */}
                <div className="h-52 w-52 shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={chartData}
                                dataKey="value"
                                nameKey="name"
                                innerRadius="60%"
                                outerRadius="100%"
                                paddingAngle={2}
                                stroke={CHART_COLORS.surface}
                            >
                                {chartData.map((item) => (
                                    <Cell key={item.id} fill={item.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                {...TOOLTIP_PROPS}
                                formatter={(value, name) => [
                                    formatCurrency(value),
                                    name,
                                ]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* নিজস্ব তালিকা: ছোট screen-এও পরিষ্কার পড়া যায় */}
                <ul className="w-full min-w-0 flex-1 space-y-2 text-sm">
                    {chartData.map((item) => (
                        <li key={item.id} className="flex items-center gap-2">
                            <span
                                className="h-3 w-3 shrink-0 rounded-full"
                                style={{ backgroundColor: item.color }}
                            />
                            <span className="min-w-0 flex-1 truncate text-content">
                                {item.name}
                            </span>
                            <span className="shrink-0 text-muted">
                                {formatNumber((item.value / total) * 100, {
                                    maximumFractionDigits: 0,
                                })}
                                %
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </ChartCard>
    );
}

export default ExpenseChart;
