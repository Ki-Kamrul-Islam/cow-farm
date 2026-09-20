import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import ChartCard from "../common/ChartCard";
import {
    CHART_COLORS,
    AXIS_PROPS,
    GRID_PROPS,
    TOOLTIP_PROPS,
} from "../../config/chartTheme";
import { useLanguage } from "../../hooks/useLanguage";
import { useFormatters } from "../../hooks/useFormatters";

// data: [{ date: '2026-09-14', liters: 352 }, ...]
function MilkProductionChart({ data, className = "" }) {
    const { t } = useLanguage();
    const { formatNumber, formatShortDate } = useFormatters();

    // তারিখ ভাষা অনুযায়ী সাজিয়ে chart-এর জন্য নতুন তালিকা বানাই
    const chartData = data.map((item) => ({
        label: formatShortDate(item.date),
        liters: item.liters,
    }));

    return (
        <ChartCard
            title={t("charts.milkTitle")}
            subtitle={t("charts.milkSubtitle")}
            isEmpty={data.length === 0}
            className={className}
        >
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={chartData}
                        margin={{ top: 8, right: 12, bottom: 0, left: 0 }}
                    >
                        <CartesianGrid {...GRID_PROPS} />
                        <XAxis dataKey="label" {...AXIS_PROPS} />
                        <YAxis
                            width={44}
                            domain={["dataMin - 20", "dataMax + 20"]}
                            tickFormatter={(value) => formatNumber(value)}
                            {...AXIS_PROPS}
                        />
                        <Tooltip
                            {...TOOLTIP_PROPS}
                            formatter={(value) => [
                                `${formatNumber(value)} ${t("units.liter")}`,
                                t("charts.milkSeries"),
                            ]}
                        />
                        <Line
                            type="monotone"
                            dataKey="liters"
                            stroke={CHART_COLORS.primary}
                            strokeWidth={3}
                            dot={{
                                r: 4,
                                fill: CHART_COLORS.surface,
                                stroke: CHART_COLORS.primary,
                                strokeWidth: 2,
                            }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </ChartCard>
    );
}

export default MilkProductionChart;
