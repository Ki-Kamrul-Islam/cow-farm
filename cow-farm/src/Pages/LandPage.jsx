import { useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FiPlus, FiSearch } from "react-icons/fi";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import ConfirmDialog from "../components/common/ConfirmDialog";
import EmptyState from "../components/common/EmptyState";
import Pagination from "../components/common/Pagination";
import LandFilters from "../components/lands/LandFilters";
import LandTable from "../components/lands/LandTable";
import LandFormModal from "../components/lands/LandFormModal";
import { useLands } from "../hooks/useLands";
import { useLandFilters } from "../hooks/useLandFilters";
import { useToast } from "../hooks/useToast";
import { useLanguage } from "../hooks/useLanguage";
import { useFormatters } from "../hooks/useFormatters";
import { grassLandAcres, totalAcres } from "../utils/landUtils";

function LandPage() {
    const { t } = useLanguage();
    const { formatNumber } = useFormatters();
    const { lands, addLand, updateLand, deleteLand } = useLands();
    const { showToast } = useToast();

    const {
        filters,
        setFilter,
        resetFilters,
        hasActiveFilters,
        setPage,
        pagination,
    } = useLandFilters(lands);

    // 🧠 State ১: Form খোলা কিনা, আর কোন জমি (land = null মানে নতুন জমি)
    const [editor, setEditor] = useState({ isOpen: false, land: null });
    // 🧠 State ২: মুছতে চাওয়া জমি (null মানে বাক্স বন্ধ)
    const [landToDelete, setLandToDelete] = useState(null);

    const openAdd = () => setEditor({ isOpen: true, land: null });
    const openEdit = (land) => setEditor({ isOpen: true, land });
    const closeEditor = () =>
        setEditor((current) => ({ ...current, isOpen: false }));

    const handleSave = (data) => {
        if (editor.land) {
            updateLand(editor.land.id, data);
            showToast(t("lands.messages.updated"));
        } else {
            addLand(data);
            showToast(t("lands.messages.added"));
        }
        closeEditor();
    };

    const handleConfirmDelete = () => {
        deleteLand(landToDelete.id);
        showToast(t("lands.messages.deleted"));
        setLandToDelete(null);
    };

    const addButton = (
        <Button icon={FiPlus} onClick={openAdd}>
            {t("lands.add")}
        </Button>
    );

    return (
        <div>
            <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-content">
                        {t("nav.land")}
                    </h1>
                    <p className="mt-1 text-sm text-muted">
                        {t("lands.totalArea")}:{" "}
                        {formatNumber(totalAcres(lands))} {t("units.acre")} ·{" "}
                        {t("lands.grassArea")}:{" "}
                        {formatNumber(grassLandAcres(lands))} {t("units.acre")}
                    </p>
                </div>

                {addButton}
            </div>

            <div className="mt-6">
                {lands.length === 0 ?
                    <EmptyState
                        icon={FaMapLocationDot}
                        title={t("lands.empty.title")}
                        description={t("lands.empty.description")}
                        action={addButton}
                    />
                :   <>
                        <Card>
                            <LandFilters
                                filters={filters}
                                onChange={setFilter}
                                onReset={resetFilters}
                                hasActiveFilters={hasActiveFilters}
                            />
                        </Card>

                        <div className="mt-4">
                            {pagination.totalItems === 0 ?
                                <EmptyState
                                    icon={FiSearch}
                                    title={t("lands.noResults.title")}
                                    description={t(
                                        "lands.noResults.description",
                                    )}
                                    action={
                                        <Button
                                            variant="secondary"
                                            onClick={resetFilters}
                                        >
                                            {t("lands.filters.clear")}
                                        </Button>
                                    }
                                />
                            :   <Card
                                    padded={false}
                                    className="overflow-hidden"
                                >
                                    <LandTable
                                        lands={pagination.pageItems}
                                        onEdit={openEdit}
                                        onDelete={setLandToDelete}
                                    />
                                    <Pagination
                                        currentPage={pagination.currentPage}
                                        totalPages={pagination.totalPages}
                                        totalItems={pagination.totalItems}
                                        startIndex={pagination.startIndex}
                                        endIndex={pagination.endIndex}
                                        onPageChange={setPage}
                                        className="border-t border-line px-4 py-3"
                                    />
                                </Card>
                            }
                        </div>
                    </>
                }
            </div>

            {/* lands হলো সব জমি (ছাঁকা তালিকা নয়), নইলে আইডি ডুপ্লিকেট যাচাই ভুল হতো */}
            <LandFormModal
                isOpen={editor.isOpen}
                land={editor.land}
                lands={lands}
                onSave={handleSave}
                onClose={closeEditor}
            />

            <ConfirmDialog
                isOpen={landToDelete !== null}
                title={t("lands.delete.title")}
                message={
                    landToDelete ?
                        t("lands.delete.message", {
                            landId: landToDelete.landId,
                            location: landToDelete.location,
                        })
                    :   ""
                }
                confirmLabel={t("common.delete")}
                onConfirm={handleConfirmDelete}
                onCancel={() => setLandToDelete(null)}
            />
        </div>
    );
}

export default LandPage;
