import Table from "../common/Table";
import CowStatusBadge from "./CowStatusBadge";
import { useLanguage } from "../../hooks/useLanguage";
import { useFormatters } from "../../hooks/useFormatters";
import { calculateAge } from "../../utils/cowUtils";
//
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Button from "../common/Button";
//

function CowTable({ cows, onEdit, onDelete }) {
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

        {
            key: "actions",
            header: t("common.actions"),
            align: "right",
            render: (cow) => (
                <div className="flex justify-end gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        icon={FiEdit2}
                        onClick={() => onEdit(cow)}
                        aria-label={`${t("common.edit")}: ${cow.name}`}
                        title={t("common.edit")}
                    />
                    <Button
                        variant="ghost"
                        size="icon"
                        icon={FiTrash2}
                        className="hover:text-danger"
                        onClick={() => onDelete(cow)}
                        aria-label={`${t("common.delete")}: ${cow.name}`}
                        title={t("common.delete")}
                    />
                </div>
            ),
        },
    ];

    return <Table columns={columns} rows={cows} getRowKey={(cow) => cow.id} />;
}

export default CowTable;
