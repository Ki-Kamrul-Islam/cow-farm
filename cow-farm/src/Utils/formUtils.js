// সব module-এর Form-এ ব্যবহারযোগ্য সাধারণ সরঞ্জাম।
// config = { defaults, fields, numberFields }
//   defaults     → নতুন রেকর্ডের শুরুর মান
//   fields       → Form-এ যেসব field আছে (ক্রম অনুযায়ী)
//   numberFields → এগুলোর মধ্যে যেগুলো সংখ্যা

// রেকর্ড → Form-এর মান।
// HTML-এর ঘর সবসময় লেখা (string) রাখে, তাই সব মান string বানাই।
// সংখ্যা ০ বা খালি হলে ঘর ফাঁকা দেখাই, নইলে নতুন রেকর্ডে "0" মুছে লিখতে হয়।
export function toFormValues(record, { defaults, fields, numberFields = [] }) {
    const source = { ...defaults, ...record };

    return Object.fromEntries(
        fields.map((key) => {
            const value = source[key];
            const isEmptyNumber = numberFields.includes(key) && !value;
            return [key, isEmptyNumber ? "" : String(value ?? "")];
        }),
    );
}

// Form-এর মান → সংরক্ষণের data। লেখা ছেঁটে নেয়, সংখ্যা আসল সংখ্যা বানায়।
// খালি সংখ্যার ঘর ০ হয়ে যায়।
export function toRecordData(values, { fields, numberFields = [] }) {
    const data = {};

    fields.forEach((key) => {
        const text = String(values[key] ?? "").trim();

        if (numberFields.includes(key)) {
            data[key] = text === "" ? 0 : Number(text);
        } else {
            data[key] = text;
        }
    });

    return data;
}

// সংখ্যার ঘর যাচাই: খালি ঠিক আছে (০ ধরা হবে), নইলে সঠিক ও অ-ঋণাত্মক হতে হবে।
// ফেরত: অনুবাদের KEY, অথবা সমস্যা না থাকলে null
export function numberError(raw, negativeKey) {
    const text = String(raw ?? "").trim();
    if (text === "") return null;

    const number = Number(text);
    if (!Number.isFinite(number)) return "validation.invalidNumber";
    if (number < 0) return negativeKey;
    return null;
}

// পরের ক্রমিক আইডি: সবচেয়ে বড় COW-012 থাকলে পরেরটা COW-013
// field = আইডি কোন field-এ, prefix = 'COW' / 'LAND' (শুধু অক্ষর, বিশেষ চিহ্ন নয়)
export function nextSequentialId(items, field, prefix, digits = 3) {
    const pattern = new RegExp(`^${prefix}-(\\d+)$`);

    const highest = items.reduce((max, item) => {
        const match = pattern.exec(item[field] ?? "");
        return match ? Math.max(max, Number(match[1])) : max;
    }, 0);

    return `${prefix}-${String(highest + 1).padStart(digits, "0")}`;
}
