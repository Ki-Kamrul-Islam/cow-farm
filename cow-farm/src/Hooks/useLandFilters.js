import { LAND_PAGE_SIZE } from "../constants/land";
import {
    DEFAULT_LAND_FILTERS,
    filterLands,
    sortLands,
} from "../utils/landFilters";
import { useListFilters } from "./useListFilters";

// জমির নিয়ম: আগে ছাঁকো, তারপর সাজাও।
// ⚠️ file-এর বাইরে, যাতে function-টি সবসময় একই থাকে (9A-তে বলা নিয়ম)
const selectLands = (lands, filters) =>
    sortLands(filterLands(lands, filters), filters.sort);

export function useLandFilters(lands, pageSize = LAND_PAGE_SIZE) {
    return useListFilters(lands, {
        defaultFilters: DEFAULT_LAND_FILTERS,
        selectItems: selectLands,
        pageSize,
    });
}
