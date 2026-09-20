import {
    FaHouse,
    FaCow,
    FaMapLocationDot,
    FaSeedling,
    FaWheatAwn,
    FaDroplet,
    FaCartShopping,
    FaHandHoldingDollar,
    FaMoneyBillTrendUp,
    FaWallet,
    FaChartLine,
    FaFileLines,
    FaGear,
} from "react-icons/fa6";
import { PATHS } from "../constants/paths";

// Sidebar-এর পুরো নকশা। প্রতিটি section-এর একটি ঐচ্ছিক শিরোনাম ও কয়েকটি item থাকে।
// labelKey = translation-এর key (t('nav.cows') এভাবে ব্যবহার হবে)
export const NAVIGATION = [
    {
        id: "main",
        items: [
            {
                id: "dashboard",
                labelKey: "nav.dashboard",
                path: PATHS.dashboard,
                icon: FaHouse,
                end: true,
            },
        ],
    },
    {
        id: "farm",
        titleKey: "nav.farm",
        items: [
            { id: "cows", labelKey: "nav.cows", path: PATHS.cows, icon: FaCow },
            {
                id: "land",
                labelKey: "nav.land",
                path: PATHS.land,
                icon: FaMapLocationDot,
            },
            {
                id: "grass",
                labelKey: "nav.grass",
                path: PATHS.grass,
                icon: FaSeedling,
            },
            {
                id: "feed",
                labelKey: "nav.feed",
                path: PATHS.feed,
                icon: FaWheatAwn,
            },
        ],
    },
    {
        id: "production",
        titleKey: "nav.production",
        items: [
            {
                id: "milk",
                labelKey: "nav.milk",
                path: PATHS.milk,
                icon: FaDroplet,
            },
        ],
    },
    {
        id: "sales",
        titleKey: "nav.sales",
        items: [
            {
                id: "milkSales",
                labelKey: "nav.milkSales",
                path: PATHS.milkSales,
                icon: FaCartShopping,
            },
            {
                id: "cowSales",
                labelKey: "nav.cowSales",
                path: PATHS.cowSales,
                icon: FaHandHoldingDollar,
            },
        ],
    },
    {
        id: "finance",
        titleKey: "nav.finance",
        items: [
            {
                id: "income",
                labelKey: "nav.income",
                path: PATHS.income,
                icon: FaMoneyBillTrendUp,
            },
            {
                id: "expenses",
                labelKey: "nav.expenses",
                path: PATHS.expenses,
                icon: FaWallet,
            },
            {
                id: "profitLoss",
                labelKey: "nav.profitLoss",
                path: PATHS.profitLoss,
                icon: FaChartLine,
            },
        ],
    },
    {
        id: "other",
        items: [
            {
                id: "reports",
                labelKey: "nav.reports",
                path: PATHS.reports,
                icon: FaFileLines,
            },
            {
                id: "settings",
                labelKey: "nav.settings",
                path: PATHS.settings,
                icon: FaGear,
            },
        ],
    },
];

// সব item একটি সমতল তালিকায় (section-এর ভাঁজ খুলে)
export const NAV_ITEMS = NAVIGATION.flatMap((section) => section.items);

// id দিয়ে একটি item খুঁজে বের করে। যেমন getNavItem('cows')
export function getNavItem(id) {
    return NAV_ITEMS.find((item) => item.id === id);
}
