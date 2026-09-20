import { useMemo } from "react";
import { dashboardService } from "../services/dashboardService";
import { useCows } from "./useCows";

// Page শুধু জানে: const summary = useDashboardSummary()
// গরু বদলালে (যোগ/মোছা/অবস্থা বদল) সংখ্যা নিজে নিজে বদলে যায়।
export function useDashboardSummary() {
    const { cows } = useCows();

    return useMemo(() => dashboardService.getSummary({ cows }), [cows]);
}
