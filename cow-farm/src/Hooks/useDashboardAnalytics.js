import { useMemo } from "react";
import { dashboardService } from "../services/dashboardService";

// Page শুধু জানে: const analytics = useDashboardAnalytics()
// profit, milkTrend, expenseByCategory, incomeVsExpense সব একসাথে পাওয়া যায়।
export function useDashboardAnalytics() {
    return useMemo(
        () => ({
            profit: dashboardService.getProfit(),
            milkTrend: dashboardService.getMilkTrend(),
            expenseByCategory: dashboardService.getExpenseByCategory(),
            incomeVsExpense: dashboardService.getIncomeVsExpense(),
        }),
        [],
    );
}
