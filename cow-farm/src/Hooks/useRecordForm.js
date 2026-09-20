import { useState } from "react";
import { useLanguage } from "./useLanguage";

// 🏭 যেকোনো module-এর Form-এর state ও আচরণ।
//
// formId        → <form>-এর id (ঘরের id গুলোও এটা দিয়ে শুরু হয়)
// initialValues → শুরুর মান (সব string)
// validate      → (values) => { field: 'translation.key' }। ঠিক থাকলে খালি {}
// toData        → (values) => সংরক্ষণের পরিষ্কার data
// onSubmit      → সব ঠিক থাকলে পরিষ্কার data নিয়ে ডাকা হয়
export function useRecordForm({
    formId,
    initialValues,
    validate,
    toData,
    onSubmit,
}) {
    const { t } = useLanguage();

    // 🧠 State ১: সব ঘরের বর্তমান মান
    const [values, setValues] = useState(initialValues);
    // 🧠 State ২: error গুলো। বার্তা নয়, অনুবাদের key রাখি (ভাষা বদলালে error-ও বদলায়)
    const [errors, setErrors] = useState({});

    // কোনো ঘরে লিখলে: সেই ঘরের মান বদলাও, আর তার error থাকলে সরিয়ে দাও
    const handleChange = (name) => (event) => {
        const { value } = event.target;
        setValues((current) => ({ ...current, [name]: value }));
        setErrors((current) => ({ ...current, [name]: undefined }));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // browser-এর নিজের page-reload আটকাই

        const found = validate(values);
        setErrors(found);

        const firstErrorField = Object.keys(found)[0];
        if (firstErrorField) {
            // প্রথম ভুল ঘরে cursor নিয়ে যাই
            document.getElementById(`${formId}-${firstErrorField}`)?.focus();
            return;
        }

        onSubmit(toData(values));
    };

    // প্রতিটি ঘরের একই চারটি prop এক জায়গায়: <Input {...field('name')} />
    const field = (name) => ({
        id: `${formId}-${name}`,
        value: values[name],
        onChange: handleChange(name),
        error: errors[name] ? t(errors[name]) : undefined,
    });

    // ['active', 'sold'] + 'cowStatus' → [{ value: 'active', label: 'সক্রিয়' }, ...]
    const toOptions = (list, prefix) =>
        list.map((value) => ({ value, label: t(`${prefix}.${value}`) }));

    return { field, handleSubmit, toOptions };
}
