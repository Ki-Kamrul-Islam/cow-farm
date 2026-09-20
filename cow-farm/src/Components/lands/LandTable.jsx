import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Table from "../common/Table";
import Button from "../common/Button";
import LandStatusBadge from "./LandStatusBadge";
import { useLanguage } from "../../hooks/useLanguage";
import { useFormatters } from "../../hooks/useFormatters";

function LandTable({ lands, onEdit, onDelete }) {
    const { t } = useLanguage();
    const { formatNumber, formatISODate } = useFormatters();

    const columns = [
        {
            key: "landId",
            header: t("lands.columns.landId"),
            render: (land) => (
                <span className="font-medium text-muted">{land.landId}</span>
            ),
        },
        {
            key: "location",
            header: t("lands.columns.location"),
            render: (land) => (
                <span className="font-semibold">{land.location}</span>
            ),
        },
        {
            key: "area",
            header: t("lands.columns.area"),
            align: "right",
            // ব্যবহারকারীর দেওয়া মূল একক ও সংখ্যাই দেখাই (একরে রূপান্তর করা মান নয়)
            render: (land) =>
                `${formatNumber(land.area)} ${t(`landUnit.${land.unit}`)}`,
        },
        {
            key: "soil",
            header: t("lands.columns.soil"),
            render: (land) => t(`soilType.${land.soilType}`),
        },
        {
            key: "crop",
            header: t("lands.columns.crop"),
            render: (land) => (
                <div>
                    <div>{land.currentCrop || "-"}</div>
                    {land.grassType !== "none" && (
                        <div className="text-xs text-muted">
                            {t(`grassType.${land.grassType}`)}
                        </div>
                    )}
                </div>
            ),
        },
        {
            key: "harvestDate",
            header: t("lands.columns.harvestDate"),
            render: (land) => formatISODate(land.expectedHarvestDate),
        },
        {
            key: "status",
            header: t("lands.columns.status"),
            render: (land) => <LandStatusBadge status={land.status} />,
        },
        {
            key: "actions",
            header: t("common.actions"),
            align: "right",
            render: (land) => (
                <div className="flex justify-end gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        icon={FiEdit2}
                        onClick={() => onEdit(land)}
                        aria-label={`${t("common.edit")}: ${land.landId}`}
                        title={t("common.edit")}
                    />
                    <Button
                        variant="ghost"
                        size="icon"
                        icon={FiTrash2}
                        className="hover:text-danger"
                        onClick={() => onDelete(land)}
                        aria-label={`${t("common.delete")}: ${land.landId}`}
                        title={t("common.delete")}
                    />
                </div>
            ),
        },
    ];

    return (
        <Table columns={columns} rows={lands} getRowKey={(land) => land.id} />
    );
}

export default LandTable;
