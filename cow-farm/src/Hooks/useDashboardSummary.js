import { useMemo } from "react";
import { dashboardService } from "../services/dashboardService";

// Page শুধু জানে: const summary = useDashboardSummary()
// data কোথা থেকে আসছে (demo, LocalStorage, API), সেটা জানার দরকার নেই।
export function useDashboardSummary() {
    return useMemo(() => dashboardService.getSummary(), []);
}
