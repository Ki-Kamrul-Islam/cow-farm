import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import ChartCard from "../common/ChartCard";
import {
    CHART_COLORS,
    AXIS_PROPS,
    GRID_PROPS,
    TOOLTIP_PROPS,
    BAR_CURSOR,
} from "../../config/chartTheme";
import { useLanguage } from "../../hooks/useLanguage";
import { useFormatters } from "../../hooks/useFormatters";

// data: [{ month: '2026-04', income: 520000, expense: 340000 }, ...]
function IncomeExpenseChart({ data, className = "" }) {
    const { t } = useLanguage();
    const { formatNumber, formatCurrency, formatMonth } = useFormatters();

    const chartData = data.map((item) => ({
        label: formatMonth(item.month),
        income: item.income,
        expense: item.expense,
    }));

    return (
        <ChartCard
            title={t("charts.incomeExpenseTitle")}
            subtitle={t("charts.incomeExpenseSubtitle")}
            isEmpty={data.length === 0}
            className={className}
        >
            <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        margin={{ top: 8, right: 12, bottom: 0, left: 0 }}
                    >
                        <CartesianGrid {...GRID_PROPS} />
                        <XAxis dataKey="label" {...AXIS_PROPS} />
                        <YAxis
                            width={52}
                            tickFormatter={(value) =>
                                formatNumber(value, { notation: "compact" })
                            }
                            {...AXIS_PROPS}
                        />
                        <Tooltip
                            {...TOOLTIP_PROPS}
                            cursor={BAR_CURSOR}
                            formatter={(value, name) => [
                                formatCurrency(value),
                                name,
                            ]}
                        />
                        <Legend
                            formatter={(value) => (
                                <span className="text-sm text-content">
                                    {value}
                                </span>
                            )}
                        />
                        <Bar
                            dataKey="income"
                            name={t("charts.income")}
                            fill={CHART_COLORS.success}
                            radius={[4, 4, 0, 0]}
                        />
                        <Bar
                            dataKey="expense"
                            name={t("charts.expense")}
                            fill={CHART_COLORS.danger}
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </ChartCard>
    );
}

export default IncomeExpenseChart;
