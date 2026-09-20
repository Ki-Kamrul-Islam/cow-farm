import { FILTER_ALL } from "../constants/cow"; // "সব" বোঝানোর মান (গরুর file-এ আছে, পরে common-এ সরাব)
import { toAcres } from "./landUtils";

export const DEFAULT_LAND_FILTERS = {
    search: "",
    status: FILTER_ALL,
    grassType: FILTER_ALL,
    soilType: FILTER_ALL,
    sort: "default",
};

export function filterLands(lands, filters) {
    const query = filters.search.trim().toLowerCase();

    return lands.filter((land) => {
        if (filters.status !== FILTER_ALL && land.status !== filters.status)
            return false;
        if (
            filters.grassType !== FILTER_ALL &&
            land.grassType !== filters.grassType
        )
            return false;
        if (
            filters.soilType !== FILTER_ALL &&
            land.soilType !== filters.soilType
        )
            return false;

        if (query) {
            // আইডি, জায়গা ও ফসলের নাম মিলিয়ে খুঁজি
            const text =
                `${land.landId} ${land.location} ${land.currentCrop ?? ""}`.toLowerCase();
            if (!text.includes(query)) return false;
        }

        return true;
    });
}

const acres = (land) => toAcres(land.area, land.unit);

// ফসল কাটার তারিখ যার কাছাকাছি সে আগে। তারিখ না থাকা জমি সবার শেষে
const byHarvestDate = (a, b) => {
    if (!a.expectedHarvestDate && !b.expectedHarvestDate) return 0;
    if (!a.expectedHarvestDate) return 1;
    if (!b.expectedHarvestDate) return -1;
    return a.expectedHarvestDate.localeCompare(b.expectedHarvestDate);
};

const SORTERS = {
    areaLarge: (a, b) => acres(b) - acres(a), // একরে রূপান্তর করে তুলনা, তাই এককের ভেদ মেটে
    areaSmall: (a, b) => acres(a) - acres(b),
    harvestSoon: byHarvestDate,
};

// 'default' বা অজানা কোড হলে যেমন আছে তেমনই
export function sortLands(lands, sortKey) {
    const sorter = SORTERS[sortKey];
    return sorter ? [...lands].sort(sorter) : lands;
}
