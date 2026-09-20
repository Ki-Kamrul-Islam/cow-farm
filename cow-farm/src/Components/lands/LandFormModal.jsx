import FormModal from "../common/FormModal";
import LandForm from "./LandForm";
import { toLandFormValues, generateLandId } from "../../utils/landUtils";
import { useLanguage } from "../../hooks/useLanguage";

const FORM_ID = "land-form";

// land দিলে সম্পাদনা, না দিলে (null) নতুন জমি যোগ
function LandFormModal({ isOpen, land, lands, onSave, onClose }) {
    const { t } = useLanguage();
    const isEditing = land !== null;

    // নতুন জমিতে পরের আইডি আগে থেকে বসিয়ে দিই (LAND-007)
    const initialValues = toLandFormValues(
        land ?? { landId: generateLandId(lands) },
    );

    return (
        <FormModal
            isOpen={isOpen}
            onClose={onClose}
            title={isEditing ? t("lands.editTitle") : t("lands.addTitle")}
            formId={FORM_ID}
        >
            <LandForm
                id={FORM_ID}
                initialValues={initialValues}
                existingLands={lands}
                editingId={isEditing ? land.id : null}
                onSubmit={onSave}
            />
        </FormModal>
    );
}

export default LandFormModal;
