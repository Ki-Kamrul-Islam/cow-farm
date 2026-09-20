// ⚠️ নমুনা data: আসল module তৈরির আগ পর্যন্ত।
export const DASHBOARD_DEMO_SUMMARY = {
    todayMilk: 380, // লিটার
    todaySales: 45000, // টাকা
    todayExpense: 18500, // টাকা
    availableFeed: 850, // কেজি
    availableLand: 4.5, // একর
    monthlyProfit: 245000, // টাকা
};

// =====================================
// ⚠️ নমুনা data (আসল module তৈরির আগ পর্যন্ত)

// লাভ-ক্ষতি (টাকা)। monthly, উপরের summary-র monthlyProfit-এর সমান
export const DASHBOARD_DEMO_PROFIT = {
    daily: 26500,
    weekly: 168000,
    monthly: 245000,
    yearly: 2850000,
};

// গত ৭ দিনের দুধ (লিটার), পুরোনো থেকে নতুন। শেষটি আজকের ৩৮০
export const DASHBOARD_DEMO_MILK_TREND = [352, 365, 348, 371, 380, 362, 380];

// গত মাসের খরচ, ক্যাটাগরি অনুযায়ী (মোট ৩,৯৫,০০০)
export const DASHBOARD_DEMO_EXPENSE_BY_CATEGORY = [
    { category: "feed", amount: 185000 },
    { category: "labour", amount: 82000 },
    { category: "medicine", amount: 34000 },
    { category: "electricity", amount: 21000 },
    { category: "transport", amount: 28000 },
    { category: "other", amount: 45000 },
];

// গত ৬ মাসের আয় ও খরচ, পুরোনো থেকে নতুন। শেষ মাসে আয় − খরচ = ২,৪৫,০০০
export const DASHBOARD_DEMO_INCOME_VS_EXPENSE = {
    income: [520000, 545000, 498000, 580000, 610000, 640000],
    expense: [340000, 355000, 362000, 370000, 385000, 395000],
};
