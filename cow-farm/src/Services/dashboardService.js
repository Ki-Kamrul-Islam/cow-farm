import {
    DASHBOARD_DEMO_SUMMARY,
    DASHBOARD_DEMO_PROFIT,
    DASHBOARD_DEMO_MILK_TREND,
    DASHBOARD_DEMO_EXPENSE_BY_CATEGORY,
    DASHBOARD_DEMO_INCOME_VS_EXPENSE,
} from "../data/dashboardDemo";
import { lastNDays, lastNMonths } from "../utils/dateUtils";

// Dashboard-এর সব data আনার একমাত্র জায়গা।
// পরে এখানে গরু/দুধ/বিক্রি/খরচের service থেকে হিসাব করে আসল সংখ্যা ফেরত দেব।
// Page বা chart-এর code তখন একটুও বদলাতে হবে না।
export const dashboardService = {
    getSummary() {
        return DASHBOARD_DEMO_SUMMARY;
    },

    getProfit() {
        return DASHBOARD_DEMO_PROFIT;
    },

    // ফলাফল: [{ date: '2026-09-14', liters: 352 }, ...]
    getMilkTrend() {
        const dates = lastNDays(DASHBOARD_DEMO_MILK_TREND.length);
        return dates.map((date, index) => ({
            date,
            liters: DASHBOARD_DEMO_MILK_TREND[index],
        }));
    },

    // ফলাফল: [{ category: 'feed', amount: 185000 }, ...]
    getExpenseByCategory() {
        return DASHBOARD_DEMO_EXPENSE_BY_CATEGORY;
    },

    // ফলাফল: [{ month: '2026-04', income: 520000, expense: 340000 }, ...]
    getIncomeVsExpense() {
        const { income, expense } = DASHBOARD_DEMO_INCOME_VS_EXPENSE;
        const months = lastNMonths(income.length);
        return months.map((month, index) => ({
            month,
            income: income[index],
            expense: expense[index],
        }));
    },
};
