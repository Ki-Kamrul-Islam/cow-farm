import Input from "../common/Input";
import Select from "../common/Select";
import Textarea from "../common/Textarea";
import {
    COW_BREEDS,
    COW_GENDERS,
    COW_STATUSES,
    HEALTH_STATUSES,
    PREGNANCY_STATUSES,
} from "../../constants/cow";
import { validateCow } from "../../utils/cowValidation";
import { toCowData } from "../../utils/cowUtils";
import { NUMBER_INPUT_PROPS } from "../../utils/formUtils";
import { useRecordForm } from "../../hooks/useRecordForm";
import { useLanguage } from "../../hooks/useLanguage";

// গরুর Form: শুধু "কোন ঘর কোথায়" লেখা। state ও আচরণ useRecordForm থেকে আসে।
function CowForm({
    id,
    initialValues,
    existingCows,
    editingId = null,
    onSubmit,
}) {
    const { t } = useLanguage();

    const { field, handleSubmit, toOptions } = useRecordForm({
        formId: id,
        initialValues,
        validate: (values) => validateCow(values, existingCows, editingId),
        toData: toCowData,
        onSubmit,
    });

    return (
        // noValidate: browser-এর নিজের (ভাষা-অমিল) error বন্ধ, আমাদের বাংলা/English error চলবে
        <form id={id} onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
                <Input
                    label={t("cows.form.cowId")}
                    required
                    {...field("cowId")}
                />
                <Input
                    label={t("cows.form.name")}
                    required
                    data-autofocus
                    {...field("name")}
                />

                <Select
                    label={t("cows.form.breed")}
                    options={toOptions(COW_BREEDS, "breed")}
                    {...field("breed")}
                />
                <Select
                    label={t("cows.form.gender")}
                    options={toOptions(COW_GENDERS, "gender")}
                    {...field("gender")}
                />

                <Input
                    label={t("cows.form.dateOfBirth")}
                    type="date"
                    {...field("dateOfBirth")}
                />
                <Input label={t("cows.form.color")} {...field("color")} />

                <Input
                    label={t("cows.form.weight")}
                    {...NUMBER_INPUT_PROPS}
                    {...field("weight")}
                />
                <Input
                    label={t("cows.form.milkProduction")}
                    {...NUMBER_INPUT_PROPS}
                    {...field("milkProduction")}
                />

                <Input
                    label={t("cows.form.purchaseDate")}
                    type="date"
                    {...field("purchaseDate")}
                />
                <Input
                    label={t("cows.form.purchasePrice")}
                    {...NUMBER_INPUT_PROPS}
                    {...field("purchasePrice")}
                />

                <Select
                    label={t("cows.form.status")}
                    options={toOptions(COW_STATUSES, "cowStatus")}
                    {...field("status")}
                />
                <Select
                    label={t("cows.form.healthStatus")}
                    options={toOptions(HEALTH_STATUSES, "healthStatus")}
                    {...field("healthStatus")}
                />

                <Input
                    label={t("cows.form.lastVaccinationDate")}
                    type="date"
                    {...field("lastVaccinationDate")}
                />
                <Select
                    label={t("cows.form.pregnancyStatus")}
                    options={toOptions(PREGNANCY_STATUSES, "pregnancyStatus")}
                    {...field("pregnancyStatus")}
                />

                <Input
                    label={t("cows.form.expectedDeliveryDate")}
                    type="date"
                    {...field("expectedDeliveryDate")}
                />

                <Textarea
                    label={t("cows.form.notes")}
                    className="sm:col-span-2"
                    {...field("notes")}
                />
            </div>
        </form>
    );
}

export default CowForm;
