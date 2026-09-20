import Table from "../common/Table";
import CowStatusBadge from "./CowStatusBadge";
import { useLanguage } from "../../hooks/useLanguage";
import { useFormatters } from "../../hooks/useFormatters";
import { calculateAge } from "../../utils/cowUtils";

function CowTable({ cows }) {
    const { t } = useLanguage();
    const { formatNumber } = useFormatters();

    // জন্মতারিখ → "৬ বছর ৬ মাস" / "6 yr 6 mo"
    const formatAge = (dateOfBirth) => {
        const age = calculateAge(dateOfBirth);
        if (!age) return "-";

        const parts = [];
        if (age.years > 0)
            parts.push(`${formatNumber(age.years)} ${t("units.year")}`);
        if (age.months > 0 || age.years === 0) {
            parts.push(`${formatNumber(age.months)} ${t("units.month")}`);
        }
        return parts.join(" ");
    };

    const columns = [
        {
            key: "cowId",
            header: t("cows.columns.cowId"),
            render: (cow) => (
                <span className="font-medium text-muted">{cow.cowId}</span>
            ),
        },
        {
            key: "name",
            header: t("cows.columns.name"),
            render: (cow) => <span className="font-semibold">{cow.name}</span>,
        },
        {
            key: "breed",
            header: t("cows.columns.breed"),
            render: (cow) => t(`breed.${cow.breed}`),
        },
        {
            key: "gender",
            header: t("cows.columns.gender"),
            render: (cow) => t(`gender.${cow.gender}`),
        },
        {
            key: "age",
            header: t("cows.columns.age"),
            render: (cow) => formatAge(cow.dateOfBirth),
        },
        {
            key: "weight",
            header: t("cows.columns.weight"),
            align: "right",
            render: (cow) => formatNumber(cow.weight),
        },
        {
            key: "milk",
            header: t("cows.columns.milk"),
            align: "right",
            render: (cow) => formatNumber(cow.milkProduction),
        },
        {
            key: "status",
            header: t("cows.columns.status"),
            render: (cow) => <CowStatusBadge status={cow.status} />,
        },
    ];

    return <Table columns={columns} rows={cows} getRowKey={(cow) => cow.id} />;
}

export default CowTable;
