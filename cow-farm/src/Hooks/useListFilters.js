import { useMemo, useState } from "react";
import { paginate } from "../utils/pagination";

// 🏭 যেকোনো তালিকার Search/Filter/Sort/Pagination-এর state এখানে।
//
// options:
//   defaultFilters → শুরুর অবস্থা। অবশ্যই `search` field থাকতে হবে
//   selectItems    → (items, filters) => ছাঁকা ও সাজানো তালিকা (module-এর নিজস্ব নিয়ম)
//   pageSize       → প্রতি পাতায় কয়টি
//
// ⚠️ selectItems file-এর বাইরে (module-level) লিখতে হবে, component-এর ভেতরে নয়।
// ভেতরে লিখলে প্রতি render-এ নতুন function হয়ে useMemo-র সুবিধা নষ্ট হয়।
export function useListFilters(
    items,
    { defaultFilters, selectItems, pageSize },
) {
    // 🧠 State ১: user কী বেছেছেন
    const [filters, setFilters] = useState(defaultFilters);
    // 🧠 State ২: কোন পাতায় আছেন
    const [page, setPage] = useState(1);

    // যেকোনো শর্ত বদলালে পাতা ১-এ ফিরে যাই (ফাঁকা পাতা আটকাতে)
    const setFilter = (name, value) => {
        setFilters((current) => ({ ...current, [name]: value }));
        setPage(1);
    };

    const resetFilters = () => {
        setFilters(defaultFilters);
        setPage(1);
    };

    const visible = useMemo(
        () => selectItems(items, filters),
        [items, filters, selectItems],
    );

    const pagination = paginate(visible, page, pageSize);

    // শুরুর অবস্থা থেকে কিছু বদলেছে কিনা ("ফিল্টার মুছুন" বোতামের জন্য)
    const hasActiveFilters = Object.keys(defaultFilters).some((key) =>
        key === "search" ?
            filters.search.trim() !== ""
        :   filters[key] !== defaultFilters[key],
    );

    return {
        filters,
        setFilter,
        resetFilters,
        hasActiveFilters,
        setPage,
        pagination,
    };
}
