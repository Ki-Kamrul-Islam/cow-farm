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
