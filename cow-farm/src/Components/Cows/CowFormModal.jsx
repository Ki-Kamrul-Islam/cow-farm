import Modal from "../common/Modal";
import Button from "../common/Button";
import CowForm from "./CowForm";
import { toFormValues, generateCowId } from "../../utils/cowUtils";
import { useLanguage } from "../../hooks/useLanguage";

const FORM_ID = "cow-form";

// cow দিলে সম্পাদনা, না দিলে (null) নতুন গরু যোগ
function CowFormModal({ isOpen, cow, cows, onSave, onClose }) {
    const { t } = useLanguage();
    const isEditing = cow !== null;

    // নতুন গরুতে পরের আইডি আগে থেকে বসিয়ে দিই (COW-013)
    const initialValues = toFormValues(cow ?? { cowId: generateCowId(cows) });

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={isEditing ? t("cows.editTitle") : t("cows.addTitle")}
            size="lg"
            closeOnOverlayClick={false}
            footer={
                <>
                    <Button variant="secondary" onClick={onClose}>
                        {t("common.cancel")}
                    </Button>
                    {/* বোতাম Form-এর বাইরে, তাই form="cow-form" দিয়ে Form-কে চেনানো */}
                    <Button type="submit" form={FORM_ID}>
                        {t("common.save")}
                    </Button>
                </>
            }
        >
            <CowForm
                id={FORM_ID}
                initialValues={initialValues}
                existingCows={cows}
                editingId={isEditing ? cow.id : null}
                onSubmit={onSave}
            />
        </Modal>
    );
}

export default CowFormModal;
