// জমির সব "নির্দিষ্ট তালিকা" এক জায়গায়। শুধু কোড, লেখা আসে i18n থেকে।

// আপনার Prompt অনুযায়ী চারটি একক
export const LAND_UNITS = ["acre", "decimal", "bigha", "hectare"];

// ⚠️ বিঘার মাপ অঞ্চলভেদে আলাদা। বাংলাদেশে সাধারণত ১ বিঘা = ৩৩ শতাংশ (০.৩৩ একর)।
// আপনার এলাকায় ভিন্ন হলে শুধু এই এক লাইন বদলান, বাকি সব হিসাব নিজে ঠিক হবে।
export const BIGHA_IN_ACRE = 0.33;

// ১ একক = কত একর
export const ACRES_PER_UNIT = {
    acre: 1,
    decimal: 0.01, // ১০০ শতাংশ = ১ একর
    bigha: BIGHA_IN_ACRE,
    hectare: 2.47105,
};

export const LAND_STATUSES = ["fallow", "preparing", "growing", "harvested"];

// Badge-এর রঙের ধরন (Badge component-এর tone নামের সাথে মেলে)
export const LAND_STATUS_TONE = {
    fallow: "neutral",
    preparing: "info",
    growing: "success",
    harvested: "warning",
};

export const SOIL_TYPES = ["loam", "clay", "sandy", "silt", "other"];

// 'none' = এই জমিতে ঘাস চাষ হচ্ছে না
export const GRASS_TYPES = [
    "none",
    "napier",
    "para",
    "german",
    "maize",
    "sorghum",
    "other",
];

// নতুন জমির শুরুর মান
export const LAND_DEFAULTS = {
    landId: "",
    location: "",
    area: 0,
    unit: "acre",
    soilType: "loam",
    currentCrop: "",
    grassType: "none",
    plantingDate: "",
    expectedHarvestDate: "",
    harvestQuantity: 0, // কেজি
    cost: 0, // টাকা
    status: "fallow",
};

// Form-এর ঘরের ক্রম
export const LAND_FORM_FIELDS = [
    "landId",
    "location",
    "area",
    "unit",
    "soilType",
    "status",
    "currentCrop",
    "grassType",
    "plantingDate",
    "expectedHarvestDate",
    "harvestQuantity",
    "cost",
];

export const LAND_NUMBER_FIELDS = ["area", "harvestQuantity", "cost"];

// তালিকা সাজানোর উপায় (অনুবাদ: lands.sort.<কোড>)
export const LAND_SORT_OPTIONS = [
    "default",
    "areaLarge",
    "areaSmall",
    "harvestSoon",
];

export const LAND_PAGE_SIZE = 10;
