import FormModal from "../common/FormModal";
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
        <FormModal
            isOpen={isOpen}
            onClose={onClose}
            title={isEditing ? t("cows.editTitle") : t("cows.addTitle")}
            formId={FORM_ID}
        >
            <CowForm
                id={FORM_ID}
                initialValues={initialValues}
                existingCows={cows}
                editingId={isEditing ? cow.id : null}
                onSubmit={onSave}
            />
        </FormModal>
    );
}

export default CowFormModal;
