import {
    COW_DEFAULTS,
    COW_FORM_FIELDS,
    COW_NUMBER_FIELDS,
    NOT_IN_HERD_STATUSES,
} from "../constants/cow";
import {
    toFormValues as buildFormValues,
    toRecordData,
    nextSequentialId,
} from "./formUtils";

// গরুর Form-এর নকশা। সাধারণ function-গুলোকে এটাই "গরুর" বানিয়ে দেয়
const COW_FORM_CONFIG = {
    defaults: COW_DEFAULTS,
    fields: COW_FORM_FIELDS,
    numberFields: COW_NUMBER_FIELDS,
};

// জন্মতারিখ থেকে বয়স: { years: 6, months: 6 }
// তারিখ খালি বা ভুল (বা ভবিষ্যতের) হলে null
export function calculateAge(dateOfBirth, today = new Date()) {
    if (!dateOfBirth) return null;

    const birth = new Date(`${dateOfBirth}T00:00:00`);
    if (Number.isNaN(birth.getTime()) || birth > today) return null;

    // মোট কত মাস পেরিয়েছে
    let months =
        (today.getFullYear() - birth.getFullYear()) * 12 +
        (today.getMonth() - birth.getMonth());

    // এই মাসের জন্মদিন এখনো আসেনি, তাই পূর্ণ মাস হয়নি
    if (today.getDate() < birth.getDate()) months -= 1;

    return { years: Math.floor(months / 12), months: months % 12 };
}

// পরের গরুর আইডি: COW-013
export const generateCowId = (cows) => nextSequentialId(cows, "cowId", "COW");

// গরুর data ↔ Form-এর মান (আগের নাম ও ব্যবহার একই, তাই অন্য file বদলাতে হয় না)
export const toFormValues = (cow) => buildFormValues(cow, COW_FORM_CONFIG);
export const toCowData = (values) => toRecordData(values, COW_FORM_CONFIG);

// এখন খামারে কতটি গরু আছে (বিক্রিত ও মৃত বাদে)
export function countHerd(cows) {
    return cows.filter((cow) => !NOT_IN_HERD_STATUSES.includes(cow.status))
        .length;
}
