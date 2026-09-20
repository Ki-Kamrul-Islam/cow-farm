// Website-এর সব URL এক জায়গায়।
// অন্য file-এ '/cows' হাতে না লিখে PATHS.cows লিখব।

export const PATHS = {
    dashboard: "/",

    cows: "/cows",
    land: "/land",
    grass: "/grass",
    feed: "/feed",

    milk: "/milk",

    milkSales: "/sales/milk",
    cowSales: "/sales/cows",

    income: "/finance/income",
    expenses: "/finance/expenses",
    profitLoss: "/finance/profit-loss",

    reports: "/reports",
    settings: "/settings",
};

// কেন? পরে কোনো URL বদলাতে চাইলে (যেমন /cows → /animals) শুধু এখানে বদলালেই Sidebar ও Route দুটোই ঠিক হয়ে যাবে।
