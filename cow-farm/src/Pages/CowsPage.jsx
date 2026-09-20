import { useState } from "react";
import { FaCow } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import ConfirmDialog from "../components/common/ConfirmDialog";
import EmptyState from "../components/common/EmptyState";
import CowTable from "../components/cows/CowTable";
import CowFormModal from "../components/cows/CowFormModal";
import { useCows } from "../hooks/useCows";
import { useToast } from "../hooks/useToast";
import { useLanguage } from "../hooks/useLanguage";
import { useFormatters } from "../hooks/useFormatters";

function CowsPage() {
    const { t } = useLanguage();
    const { formatNumber } = useFormatters();
    const { cows, addCow, updateCow, deleteCow } = useCows();
    const { showToast } = useToast();

    // 🧠 State ১: Form খোলা কিনা, আর কোন গরু (cow = null মানে নতুন গরু)
    const [editor, setEditor] = useState({ isOpen: false, cow: null });
    // 🧠 State ২: মুছতে চাওয়া গরু (null মানে কিছু নয়, বাক্স বন্ধ)
    const [cowToDelete, setCowToDelete] = useState(null);

    const openAdd = () => setEditor({ isOpen: true, cow: null });
    const openEdit = (cow) => setEditor({ isOpen: true, cow });
    const closeEditor = () =>
        setEditor((current) => ({ ...current, isOpen: false }));

    // Form থেকে পরিষ্কার data এলে
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

    return (
        <div>
            {/* শিরোনাম ও "গরু যোগ করুন" বোতাম */}
            <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-content">
                        {t("nav.cows")}
                    </h1>
                    <p className="mt-1 text-sm text-muted">
                        {t("cows.total")}: {formatNumber(cows.length)}
                    </p>
                </div>

                <Button icon={FiPlus} onClick={openAdd}>
                    {t("cows.add")}
                </Button>
            </div>

            {/* তালিকা বা "কোনো গরু নেই" */}
            <div className="mt-6">
                {cows.length === 0 ?
                    <EmptyState
                        icon={FaCow}
                        title={t("cows.empty.title")}
                        description={t("cows.empty.description")}
                        action={
                            <Button icon={FiPlus} onClick={openAdd}>
                                {t("cows.add")}
                            </Button>
                        }
                    />
                :   <Card padded={false} className="overflow-hidden">
                        <CowTable
                            cows={cows}
                            onEdit={openEdit}
                            onDelete={setCowToDelete}
                        />
                    </Card>
                }
            </div>

            {/* Form বাক্স (নতুন/সম্পাদনা) */}
            <CowFormModal
                isOpen={editor.isOpen}
                cow={editor.cow}
                cows={cows}
                onSave={handleSave}
                onClose={closeEditor}
            />

            {/* মুছে ফেলার নিশ্চিতকরণ */}
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
