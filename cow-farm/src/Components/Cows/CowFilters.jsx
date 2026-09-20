import { FiX } from "react-icons/fi";
import Button from "../common/Button";
import Select from "../common/Select";
import SearchBar from "../common/SearchBar";
import {
    COW_BREEDS,
    COW_GENDERS,
    COW_SORT_OPTIONS,
    COW_STATUSES,
    FILTER_ALL,
} from "../../constants/cow";
import { useLanguage } from "../../hooks/useLanguage";

// filters: { search, breed, status, gender, sort }
// onChange(name, value): কোন শর্ত বদলাল জানায়
// onReset: সব শর্ত মুছে ফেলে
function CowFilters({ filters, onChange, onReset, hasActiveFilters }) {
    const { t } = useLanguage();

    const toOptions = (list, prefix) =>
        list.map((value) => ({ value, label: t(`${prefix}.${value}`) }));

    // তালিকার আগে "সব" যোগ করে
    const withAll = (options) => [
        { value: FILTER_ALL, label: t("common.all") },
        ...options,
    ];

    const select = (name) => ({
        value: filters[name],
        onChange: (event) => onChange(name, event.target.value),
    });

    return (
        <div>
            <div className="flex items-center gap-2">
                <SearchBar
                    className="min-w-0 flex-1"
                    value={filters.search}
                    onChange={(value) => onChange("search", value)}
                    placeholder={t("cows.searchPlaceholder")}
                />

                {hasActiveFilters && (
                    <Button
                        variant="secondary"
                        icon={FiX}
                        onClick={onReset}
                        className="shrink-0"
                    >
                        {t("cows.filters.clear")}
                    </Button>
                )}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Select
                    label={t("cows.columns.breed")}
                    options={withAll(toOptions(COW_BREEDS, "breed"))}
                    {...select("breed")}
                />
                <Select
                    label={t("cows.columns.status")}
                    options={withAll(toOptions(COW_STATUSES, "cowStatus"))}
                    {...select("status")}
                />
                <Select
                    label={t("cows.columns.gender")}
                    options={withAll(toOptions(COW_GENDERS, "gender"))}
                    {...select("gender")}
                />
                <Select
                    label={t("cows.filters.sortBy")}
                    options={toOptions(COW_SORT_OPTIONS, "cows.sort")}
                    {...select("sort")}
                />
            </div>
        </div>
    );
}

export default CowFilters;
