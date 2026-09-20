// গরু-সংক্রান্ত হিসাব। React জানে না, তাই আলাদাভাবে পরীক্ষা করা যায়।

// জন্মতারিখ থেকে বয়স: { years: 6, months: 6 }
// তারিখ খালি বা ভুল (বা ভবিষ্যতের) হলে null
// এখন:
import {
    COW_DEFAULTS,
    COW_FORM_FIELDS,
    COW_NUMBER_FIELDS,
    NOT_IN_HERD_STATUSES,
} from "../constants/cow";
//
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

// পরের গরুর আইডি: সবচেয়ে বড় COW-০১২ থাকলে পরেরটা COW-013
export function generateCowId(cows) {
    const highest = cows.reduce((max, cow) => {
        const match = /^COW-(\d+)$/.exec(cow.cowId ?? "");
        return match ? Math.max(max, Number(match[1])) : max;
    }, 0);

    return `COW-${String(highest + 1).padStart(3, "0")}`;
}
//
// গরুর data → Form-এর মান।
// HTML-এর ঘর সবসময় লেখা (string) রাখে, তাই সব মান string বানাই।
// সংখ্যা ০ বা খালি হলে ঘর ফাঁকা দেখাই, নইলে নতুন গরুতে "0" মুছে লিখতে হয়।
export function toFormValues(cow) {
    const source = { ...COW_DEFAULTS, ...cow };

    return Object.fromEntries(
        COW_FORM_FIELDS.map((key) => {
            const value = source[key];
            const isEmptyNumber = COW_NUMBER_FIELDS.includes(key) && !value;
            return [key, isEmptyNumber ? "" : String(value ?? "")];
        }),
    );
}

// Form-এর মান → সংরক্ষণের data। লেখা ছেঁটে নেয়, সংখ্যা আসল সংখ্যা বানায়।
// খালি সংখ্যার ঘর ০ হয়ে যায়।
export function toCowData(values) {
    const data = {};

    COW_FORM_FIELDS.forEach((key) => {
        const text = String(values[key] ?? "").trim();

        if (COW_NUMBER_FIELDS.includes(key)) {
            data[key] = text === "" ? 0 : Number(text);
        } else {
            data[key] = text;
        }
    });

    return data;
}

//
// এখন খামারে কতটি গরু আছে (বিক্রিত ও মৃত বাদে)
export function countHerd(cows) {
    return cows.filter((cow) => !NOT_IN_HERD_STATUSES.includes(cow.status))
        .length;
}
