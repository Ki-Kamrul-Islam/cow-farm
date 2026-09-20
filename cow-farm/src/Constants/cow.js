// গরুর সব "নির্দিষ্ট তালিকা" এক জায়গায়।
// এখানে শুধু কোড রাখা হয়। বাংলা/English লেখা আসে i18n থেকে।

// আপনার Prompt-এর ক্রম অনুযায়ী
export const COW_STATUSES = [
    "active",
    "sold",
    "sick",
    "pregnant",
    "dead",
    "retired",
];

// Badge-এর রঙের ধরন। Badge component-এর tone নামের সাথে মেলে
export const COW_STATUS_TONE = {
    active: "success",
    sold: "neutral",
    sick: "warning",
    pregnant: "info",
    dead: "danger",
    retired: "neutral",
};

export const COW_GENDERS = ["female", "male"];

export const COW_BREEDS = [
    "local",
    "redChittagong",
    "sahiwal",
    "holsteinFriesian",
    "jersey",
    "sindhi",
    "crossbreed",
    "other",
];

// এই দুটির অনুবাদ 8B-তে Form বানানোর সময় যোগ হবে
export const HEALTH_STATUSES = ["healthy", "sick", "recovering"];
export const PREGNANCY_STATUSES = ["notPregnant", "pregnant", "notApplicable"];

// নতুন গরুর শুরুর মান। নমুনা data ও (8B-তে) Form দুটোই এটা ব্যবহার করবে
export const COW_DEFAULTS = {
    cowId: "",
    name: "",
    breed: "local",
    gender: "female",
    dateOfBirth: "",
    weight: 0,
    color: "",
    purchaseDate: "",
    purchasePrice: 0,
    status: "active",
    healthStatus: "healthy",
    lastVaccinationDate: "",
    pregnancyStatus: "notPregnant",
    expectedDeliveryDate: "",
    milkProduction: 0,
    notes: "",
    photo: null,
};

// Form-এ যেসব field সম্পাদনা করা যায় (Form-এর ক্রম অনুযায়ী)
// photo বাদ: ছবি upload ভবিষ্যতে আসবে
export const COW_FORM_FIELDS = [
    "cowId",
    "name",
    "breed",
    "gender",
    "dateOfBirth",
    "color",
    "weight",
    "milkProduction",
    "purchaseDate",
    "purchasePrice",
    "status",
    "healthStatus",
    "lastVaccinationDate",
    "pregnancyStatus",
    "expectedDeliveryDate",
    "notes",
];

// যেগুলো সংখ্যা (বাকি সব লেখা)
export const COW_NUMBER_FIELDS = ["weight", "milkProduction", "purchasePrice"];

//
// "সব" বেছে নিলে ছাঁকা হয় না। কোনো আসল জাত/অবস্থার কোডের সাথে যেন না মেলে
export const FILTER_ALL = "all";

// তালিকা সাজানোর উপায় (অনুবাদ: cows.sort.<কোড>)
export const COW_SORT_OPTIONS = [
    "default",
    "ageOldest",
    "ageYoungest",
    "milkHigh",
    "milkLow",
    "name",
];

// প্রতি পাতায় কয়টি গরু। সংখ্যা বদলালেই পাতা ভাগ বদলে যাবে
export const COW_PAGE_SIZE = 10;

// এই অবস্থার গরু আর খামারে নেই, "মোট গরু" গণনায় ধরা হয় না
export const NOT_IN_HERD_STATUSES = ["sold", "dead"];
