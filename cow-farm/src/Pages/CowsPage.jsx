import { useState } from "react";
import { FaCow } from "react-icons/fa6";
import { FiPlus, FiSearch } from "react-icons/fi";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import ConfirmDialog from "../components/common/ConfirmDialog";
import EmptyState from "../components/common/EmptyState";
import Pagination from "../components/common/Pagination";
import CowFilters from "../components/cows/CowFilters";
import CowTable from "../components/cows/CowTable";
import CowFormModal from "../components/cows/CowFormModal";
import { useCows } from "../hooks/useCows";
import { useCowFilters } from "../hooks/useCowFilters";
import { useToast } from "../hooks/useToast";
import { useLanguage } from "../hooks/useLanguage";
import { useFormatters } from "../hooks/useFormatters";
import { countHerd } from "../utils/cowUtils";

function CowsPage() {
    const { t } = useLanguage();
    const { formatNumber } = useFormatters();
    const { cows, addCow, updateCow, deleteCow } = useCows();
    const { showToast } = useToast();

    // 🧠 ছাঁকা-সাজানো-পাতা-ভাগ করা ফলাফল (hook থেকে)
    const {
        filters,
        setFilter,
        resetFilters,
        hasActiveFilters,
        setPage,
        pagination,
    } = useCowFilters(cows);

    // 🧠 State ১: Form খোলা কিনা, আর কোন গরু (cow = null মানে নতুন গরু)
    const [editor, setEditor] = useState({ isOpen: false, cow: null });
    // 🧠 State ২: মুছতে চাওয়া গরু (null মানে কিছু নয়, বাক্স বন্ধ)
    const [cowToDelete, setCowToDelete] = useState(null);

    const openAdd = () => setEditor({ isOpen: true, cow: null });
    const openEdit = (cow) => setEditor({ isOpen: true, cow });
    const closeEditor = () =>
        setEditor((current) => ({ ...current, isOpen: false }));

    const handleSave = (data) => {
        if (editor.cow) {
            updateCow(editor.cow.id, data);
            showToast(t("cows.messages.updated"));
        } else {
            addCow(data);
            showToast(t("cows.messages.added"));
        }
        closeEditor();
    };

    const handleConfirmDelete = () => {
        deleteCow(cowToDelete.id);
        showToast(t("cows.messages.deleted"));
        setCowToDelete(null);
    };

    const addButton = (
        <Button icon={FiPlus} onClick={openAdd}>
            {t("cows.add")}
        </Button>
    );

    return (
        <div>
            {/* শিরোনাম ও "গরু যোগ করুন" বোতাম */}
            <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-content">
                        {t("nav.cows")}
                    </h1>
                    <p className="mt-1 text-sm text-muted">
                        {t("cows.inHerd")}: {formatNumber(countHerd(cows))} ·{" "}
                        {t("cows.totalRecords")}: {formatNumber(cows.length)}
                    </p>
                </div>

                {addButton}
            </div>

            <div className="mt-6">
                {cows.length === 0 ?
                    // একটিও গরু নেই
                    <EmptyState
                        icon={FaCow}
                        title={t("cows.empty.title")}
                        description={t("cows.empty.description")}
                        action={addButton}
                    />
                :   <>
                        <Card>
                            <CowFilters
                                filters={filters}
                                onChange={setFilter}
                                onReset={resetFilters}
                                hasActiveFilters={hasActiveFilters}
                            />
                        </Card>

                        <div className="mt-4">
                            {pagination.totalItems === 0 ?
                                // গরু আছে, কিন্তু শর্তের সাথে কোনোটি মেলেনি
                                <EmptyState
                                    icon={FiSearch}
                                    title={t("cows.noResults.title")}
                                    description={t(
                                        "cows.noResults.description",
                                    )}
                                    action={
                                        <Button
                                            variant="secondary"
                                            onClick={resetFilters}
                                        >
                                            {t("cows.filters.clear")}
                                        </Button>
                                    }
                                />
                            :   <Card
                                    padded={false}
                                    className="overflow-hidden"
                                >
                                    <CowTable
                                        cows={pagination.pageItems}
                                        onEdit={openEdit}
                                        onDelete={setCowToDelete}
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

            {/* Form বাক্স: cows হলো সব গরু (ছাঁকা তালিকা নয়), নইলে আইডি ডুপ্লিকেট যাচাই ভুল হতো */}
            <CowFormModal
                isOpen={editor.isOpen}
                cow={editor.cow}
                cows={cows}
                onSave={handleSave}
                onClose={closeEditor}
            />

            <ConfirmDialog
                isOpen={cowToDelete !== null}
                title={t("cows.delete.title")}
                message={
                    cowToDelete ?
                        t("cows.delete.message", {
                            name: cowToDelete.name,
                            cowId: cowToDelete.cowId,
                        })
                    :   ""
                }
                confirmLabel={t("common.delete")}
                onConfirm={handleConfirmDelete}
                onCancel={() => setCowToDelete(null)}
            />
        </div>
    );
}

export default CowsPage;
