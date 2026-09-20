import { COW_PAGE_SIZE } from "../constants/cow";
import { DEFAULT_COW_FILTERS, filterCows, sortCows } from "../utils/cowFilters";
import { useListFilters } from "./useListFilters";

// গরুর নিয়ম: আগে ছাঁকো, তারপর সাজাও।
// ⚠️ file-এর বাইরে, যাতে function-টি সবসময় একই থাকে
const selectCows = (cows, filters) =>
    sortCows(filterCows(cows, filters), filters.sort);

export function useCowFilters(cows, pageSize = COW_PAGE_SIZE) {
    return useListFilters(cows, {
        defaultFilters: DEFAULT_COW_FILTERS,
        selectItems: selectCows,
        pageSize,
    });
}
