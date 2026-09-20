import { useState } from "react";
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
import { useLanguage } from "../../hooks/useLanguage";

// id: <form>-এর নাম (বাইরের Save বোতাম এটা দিয়েই Form চেনে)
// initialValues: শুরুর মান (সব string)
// existingCows: আইডি ডুপ্লিকেট আছে কিনা দেখার জন্য
// editingId: সম্পাদনার সময় গরুটির নিজের আইডি (নিজের সাথে মেলা ধরা হয় না)
// onSubmit: সব ঠিক থাকলে পরিষ্কার data নিয়ে ডাকা হয়
function CowForm({
    id,
    initialValues,
    existingCows,
    editingId = null,
    onSubmit,
}) {
    const { t } = useLanguage();

    // 🧠 State ১: সব ঘরের বর্তমান মান
    const [values, setValues] = useState(initialValues);
    // 🧠 State ২: error গুলো { name: 'validation.nameRequired' }। key রাখি, বার্তা নয়
    const [errors, setErrors] = useState({});

    // কোনো ঘরে লিখলে: সেই ঘরের মান বদলাও, আর তার error থাকলে সরিয়ে দাও
    const handleChange = (name) => (event) => {
        const { value } = event.target;
        setValues((current) => ({ ...current, [name]: value }));
        setErrors((current) => ({ ...current, [name]: undefined }));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // browser-এর নিজের page-reload আটকাই

        const found = validateCow(values, existingCows, editingId);
        setErrors(found);

        const firstErrorField = Object.keys(found)[0];
        if (firstErrorField) {
            // প্রথম ভুল ঘরে cursor নিয়ে যাই
            document.getElementById(`${id}-${firstErrorField}`)?.focus();
            return;
        }

        onSubmit(toCowData(values));
    };

    // প্রতিটি ঘরের একই চারটি prop এক জায়গায় বানাই
    const field = (name) => ({
        id: `${id}-${name}`,
        value: values[name],
        onChange: handleChange(name),
        error: errors[name] ? t(errors[name]) : undefined,
    });

    const toOptions = (list, prefix) =>
        list.map((value) => ({ value, label: t(`${prefix}.${value}`) }));

    const numberProps = {
        type: "number",
        inputMode: "decimal",
        step: "any",
        min: "0",
    };

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
                    {...numberProps}
                    {...field("weight")}
                />
                <Input
                    label={t("cows.form.milkProduction")}
                    {...numberProps}
                    {...field("milkProduction")}
                />

                <Input
                    label={t("cows.form.purchaseDate")}
                    type="date"
                    {...field("purchaseDate")}
                />
                <Input
                    label={t("cows.form.purchasePrice")}
                    {...numberProps}
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
