// 🎨 Chart-এর সব রঙ ও style এক জায়গায়।
// Recharts Tailwind class বোঝে না, তাই এখানে theme.css-এর CSS variable সরাসরি ব্যবহার করছি।
// এটাই একমাত্র জায়গা যেখানে `--c-...` নাম সরাসরি লেখা হয়। বাকি সব file-এ Tailwind-এর নাম।

export const CHART_COLORS = {
    primary: "var(--c-primary)",
    success: "var(--c-success)",
    danger: "var(--c-danger)",
    info: "var(--c-info)",
    surface: "var(--c-surface)",
};

// Pie chart-এর টুকরোগুলোর রঙ, এই ক্রমে বসবে
export const CATEGORY_COLORS = [
    "var(--c-primary)",
    "var(--c-info)",
    "var(--c-accent)",
    "var(--c-danger)",
    "var(--c-secondary)",
    "var(--c-muted)",
];

// X/Y অক্ষের লেখা ও দাগ
export const AXIS_PROPS = {
    tick: { fill: "var(--c-muted)", fontSize: 12 },
    axisLine: { stroke: "var(--c-line)" },
    tickLine: { stroke: "var(--c-line)" },
};

// পেছনের ঘরের দাগ (শুধু আড়াআড়ি)
export const GRID_PROPS = {
    stroke: "var(--c-line)",
    strokeDasharray: "3 3",
    vertical: false,
};

// মাউস রাখলে যে ছোট বাক্স আসে (tooltip)
export const TOOLTIP_PROPS = {
    contentStyle: {
        backgroundColor: "var(--c-surface)",
        border: "1px solid var(--c-line)",
        borderRadius: 8,
        color: "var(--c-content)",
        fontSize: 13,
    },
    labelStyle: { color: "var(--c-content)", fontWeight: 600 },
    itemStyle: { color: "var(--c-content)" },
};

// বার chart-এ মাউস রাখলে পেছনে যে হালকা ছায়া পড়ে
export const BAR_CURSOR = { fill: "var(--c-line)", opacity: 0.4 };
