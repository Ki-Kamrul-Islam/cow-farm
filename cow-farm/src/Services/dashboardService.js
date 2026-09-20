import {
    DASHBOARD_DEMO_SUMMARY,
    DASHBOARD_DEMO_PROFIT,
    DASHBOARD_DEMO_MILK_TREND,
    DASHBOARD_DEMO_EXPENSE_BY_CATEGORY,
    DASHBOARD_DEMO_INCOME_VS_EXPENSE,
} from "../data/dashboardDemo";
import { lastNDays, lastNMonths } from "../utils/dateUtils";
import { countHerd } from "../utils/cowUtils";
import { grassLandAcres } from "../utils/landUtils";

// Dashboard-এর সব data আনার একমাত্র জায়গা।
// যে অংশের module তৈরি হয়েছে (গরু, জমি) সেটা আসল, বাকিটা এখনো নমুনা।
export const dashboardService = {
    // cows, lands: hook থেকে আসা তালিকা
    getSummary({ cows = [], lands = [] } = {}) {
        return {
            ...DASHBOARD_DEMO_SUMMARY, // আপাতত নমুনা
            totalCows: countHerd(cows), // ✅ আসল
            availableLand: grassLandAcres(lands), // ✅ আসল (একরে)
        };
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
