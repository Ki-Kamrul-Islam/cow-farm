import { FiX } from "react-icons/fi";
import Button from "../common/Button";
import Select from "../common/Select";
import SearchBar from "../common/SearchBar";
import {
    GRASS_TYPES,
    LAND_SORT_OPTIONS,
    LAND_STATUSES,
    SOIL_TYPES,
} from "../../constants/land";
import { FILTER_ALL } from "../../constants/cow";
import { useLanguage } from "../../hooks/useLanguage";

function LandFilters({ filters, onChange, onReset, hasActiveFilters }) {
    const { t } = useLanguage();

    const toOptions = (list, prefix) =>
        list.map((value) => ({ value, label: t(`${prefix}.${value}`) }));

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
                    placeholder={t("lands.searchPlaceholder")}
                />

                {hasActiveFilters && (
                    <Button
                        variant="secondary"
                        icon={FiX}
                        onClick={onReset}
                        className="shrink-0"
                    >
                        {t("lands.filters.clear")}
                    </Button>
                )}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Select
                    label={t("lands.columns.status")}
                    options={withAll(toOptions(LAND_STATUSES, "landStatus"))}
                    {...select("status")}
                />
                <Select
                    label={t("lands.form.grassType")}
                    options={withAll(toOptions(GRASS_TYPES, "grassType"))}
                    {...select("grassType")}
                />
                <Select
                    label={t("lands.form.soilType")}
                    options={withAll(toOptions(SOIL_TYPES, "soilType"))}
                    {...select("soilType")}
                />
                <Select
                    label={t("lands.filters.sortBy")}
                    options={toOptions(LAND_SORT_OPTIONS, "lands.sort")}
                    {...select("sort")}
                />
            </div>
        </div>
    );
}

export default LandFilters;
