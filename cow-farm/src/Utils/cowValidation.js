import { toISODate } from "./dateUtils";

// সংখ্যার ঘর যাচাই: খালি ঠিক আছে (০ ধরা হবে), নইলে সঠিক ও অ-ঋণাত্মক হতে হবে
function numberError(raw, negativeKey) {
    const text = String(raw ?? "").trim();
    if (text === "") return null;

    const number = Number(text);
    if (!Number.isFinite(number)) return "validation.invalidNumber";
    if (number < 0) return negativeKey;
    return null;
}

// ফেরত: { fieldName: 'translation.key' }। error না থাকলে খালি object {}
// ⚠️ এখানে বার্তা নয়, অনুবাদের KEY রাখি। ভাষা বদলালে error-ও নিজে বদলাবে।
// error-এর ক্রম Form-এর ক্রম অনুযায়ী (প্রথম error-এর ঘরে cursor যাবে)
export function validateCow(
    values,
    existingCows,
    editingId = null,
    today = new Date(),
) {
    const errors = {};
    const todayISO = toISODate(today);
    const fail = (field, messageKey) => {
        if (messageKey) errors[field] = messageKey;
    };

    // গরুর আইডি: আবশ্যক ও অনন্য (নিজেকে বাদ দিয়ে, বড়/ছোট হাতের অক্ষর ধরে না)
    const cowId = values.cowId.trim();
    if (!cowId) {
        fail("cowId", "validation.cowIdRequired");
    } else if (
        existingCows.some(
            (cow) =>
                cow.id !== editingId &&
                (cow.cowId ?? "").trim().toLowerCase() === cowId.toLowerCase(),
        )
    ) {
        fail("cowId", "validation.cowIdDuplicate");
    }

    if (!values.name.trim()) fail("name", "validation.nameRequired");

    // ISO তারিখ ('2026-09-20') লেখা হিসেবেই তুলনা করা যায়। খালি '' কখনো বড় নয়।
    if (values.dateOfBirth > todayISO)
        fail("dateOfBirth", "validation.dateFuture");

    fail("weight", numberError(values.weight, "validation.negative"));
    fail(
        "milkProduction",
        numberError(values.milkProduction, "validation.negative"),
    );

    if (values.purchaseDate > todayISO) {
        fail("purchaseDate", "validation.dateFuture");
    } else if (
        values.purchaseDate &&
        values.dateOfBirth &&
        values.purchaseDate < values.dateOfBirth
    ) {
        fail("purchaseDate", "validation.purchaseBeforeBirth");
    }

    fail(
        "purchasePrice",
        numberError(values.purchasePrice, "validation.priceNegative"),
    );

    if (values.lastVaccinationDate > todayISO) {
        fail("lastVaccinationDate", "validation.dateFuture");
    }

    if (values.gender === "male" && values.pregnancyStatus === "pregnant") {
        fail("pregnancyStatus", "validation.malePregnant");
    }

    return errors;
}
