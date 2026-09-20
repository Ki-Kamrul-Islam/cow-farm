import { useMemo, useState } from "react";
import { COW_PAGE_SIZE, FILTER_ALL } from "../constants/cow";
import { DEFAULT_COW_FILTERS, filterCows, sortCows } from "../utils/cowFilters";
import { paginate } from "../utils/pagination";

// cows (সব গরু) দিলে ছাঁকা-সাজানো-পাতা-ভাগ করা ফলাফল ফেরত দেয়
export function useCowFilters(cows, pageSize = COW_PAGE_SIZE) {
    // 🧠 State ১: user কী বেছেছেন
    const [filters, setFilters] = useState(DEFAULT_COW_FILTERS);
    // 🧠 State ২: কোন পাতায় আছেন
    const [page, setPage] = useState(1);

    // যেকোনো শর্ত বদলালে পাতা ১-এ ফিরে যাই।
    // নইলে ৩ পাতার তালিকায় পাতা ৩-এ থেকে ফিল্টার দিলে ফাঁকা পাতা দেখা যেত
    const setFilter = (name, value) => {
        setFilters((current) => ({ ...current, [name]: value }));
        setPage(1);
    };

    const resetFilters = () => {
        setFilters(DEFAULT_COW_FILTERS);
        setPage(1);
    };

    // ছাঁকা ও সাজানো: শুধু cows বা filters বদলালে আবার হিসাব হয়
    const filtered = useMemo(
        () => sortCows(filterCows(cows, filters), filters.sort),
        [cows, filters],
    );

    // পাতার অংশ কাটা হয় প্রতি render-এ (কাজটা খুব ছোট)
    const pagination = paginate(filtered, page, pageSize);

    // "ফিল্টার মুছুন" বোতাম দেখানো হবে কিনা
    const hasActiveFilters =
        filters.search.trim() !== "" ||
        filters.breed !== FILTER_ALL ||
        filters.status !== FILTER_ALL ||
        filters.gender !== FILTER_ALL ||
        filters.sort !== DEFAULT_COW_FILTERS.sort;

    return {
        filters,
        setFilter,
        resetFilters,
        hasActiveFilters,
        setPage,
        pagination,
    };
}
