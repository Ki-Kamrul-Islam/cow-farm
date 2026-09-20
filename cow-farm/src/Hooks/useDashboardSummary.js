import { useMemo } from "react";
import { dashboardService } from "../services/dashboardService";
import { useCows } from "./useCows";
import { useLands } from "./useLands";

// Page শুধু জানে: const summary = useDashboardSummary()
// গরু বা জমি বদলালে সংখ্যা নিজে নিজে বদলে যায়।
export function useDashboardSummary() {
    const { cows } = useCows();
    const { lands } = useLands();

    return useMemo(
        () => dashboardService.getSummary({ cows, lands }),
        [cows, lands],
    );
}
