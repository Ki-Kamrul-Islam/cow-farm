import { numberError } from "./formUtils";

// ফেরত: { fieldName: 'translation.key' }। error না থাকলে খালি {}
// error-এর ক্রম Form-এর ঘরের ক্রম অনুযায়ী (প্রথম error-এর ঘরে cursor যায়)
export function validateLand(values, existingLands, editingId = null) {
    const errors = {};
    const fail = (field, messageKey) => {
        if (messageKey) errors[field] = messageKey;
    };

    // জমির আইডি: আবশ্যক ও অনন্য (নিজেকে বাদ দিয়ে, বড়/ছোট হাতের অক্ষর ধরে না)
    const landId = values.landId.trim();
    if (!landId) {
        fail("landId", "validation.landIdRequired");
    } else if (
        existingLands.some(
            (land) =>
                land.id !== editingId &&
                (land.landId ?? "").trim().toLowerCase() ===
                    landId.toLowerCase(),
        )
    ) {
        fail("landId", "validation.landIdDuplicate");
    }

    if (!values.location.trim())
        fail("location", "validation.locationRequired");

    // আয়তন: আবশ্যক এবং ০-র চেয়ে বড় হতে হবে (০ আয়তনের জমি হয় না)
    const areaText = values.area.trim();
    if (areaText === "") {
        fail("area", "validation.areaRequired");
    } else if (!Number.isFinite(Number(areaText))) {
        fail("area", "validation.invalidNumber");
    } else if (Number(areaText) <= 0) {
        fail("area", "validation.areaPositive");
    }

    // ISO তারিখ ('2026-10-15') লেখা হিসেবেই তুলনা করা যায়। খালি '' হলে তুলনা হয় না।
    // ভবিষ্যতের চাষের তারিখ নিষেধ নয়, কারণ চাষের পরিকল্পনা আগেই লেখা যায়।
    if (
        values.plantingDate &&
        values.expectedHarvestDate &&
        values.expectedHarvestDate < values.plantingDate
    ) {
        fail("expectedHarvestDate", "validation.harvestBeforePlanting");
    }

    fail(
        "harvestQuantity",
        numberError(values.harvestQuantity, "validation.negative"),
    );
    fail("cost", numberError(values.cost, "validation.costNegative"));

    return errors;
}
