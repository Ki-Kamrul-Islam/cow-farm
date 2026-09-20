import { FILTER_ALL } from "../constants/cow";

// Search/Filter/Sort-এর শুরুর অবস্থা (কিছুই বাছা নেই)
export const DEFAULT_COW_FILTERS = {
    search: "",
    breed: FILTER_ALL,
    status: FILTER_ALL,
    gender: FILTER_ALL,
    sort: "default",
};

// filters অনুযায়ী গরু ছেঁকে নতুন তালিকা দেয়। সব শর্ত একসাথে মিলতে হবে (AND)
export function filterCows(cows, filters) {
    const query = filters.search.trim().toLowerCase();

    return cows.filter((cow) => {
        if (filters.breed !== FILTER_ALL && cow.breed !== filters.breed)
            return false;
        if (filters.status !== FILTER_ALL && cow.status !== filters.status)
            return false;
        if (filters.gender !== FILTER_ALL && cow.gender !== filters.gender)
            return false;

        if (query) {
            // নাম ও আইডি মিলিয়ে এক লেখা বানিয়ে খুঁজি। ছোট/বড় হাতের অক্ষর ধরি না
            const text = `${cow.name} ${cow.cowId}`.toLowerCase();
            if (!text.includes(query)) return false;
        }

        return true;
    });
}

// direction: 1 হলে পুরোনো জন্ম আগে (বয়স বেশি আগে), -1 হলে নতুন জন্ম আগে
// জন্মতারিখ না থাকা গরু দুই দিকেই সবার শেষে যায়
const byDateOfBirth = (direction) => (a, b) => {
    if (!a.dateOfBirth && !b.dateOfBirth) return 0;
    if (!a.dateOfBirth) return 1;
    if (!b.dateOfBirth) return -1;
    // '2020-03-14' আকারের তারিখ লেখা হিসেবেই সঠিক ক্রমে তুলনা করা যায়
    return a.dateOfBirth.localeCompare(b.dateOfBirth) * direction;
};

const milk = (cow) => Number(cow.milkProduction) || 0;

// প্রতিটি sort-এর কোডের জন্য একটি তুলনার function
const SORTERS = {
    ageOldest: byDateOfBirth(1),
    ageYoungest: byDateOfBirth(-1),
    milkHigh: (a, b) => milk(b) - milk(a),
    milkLow: (a, b) => milk(a) - milk(b),
    name: (a, b) => a.name.localeCompare(b.name, ["bn", "en"]),
};

// 'default' বা অজানা কোড হলে যেমন আছে তেমনই (যোগ করার ক্রম)
export function sortCows(cows, sortKey) {
    const sorter = SORTERS[sortKey];
    // [...cows]: আসল তালিকা না ছুঁয়ে কপি সাজাই। .sort() আসল তালিকাকেই বদলে দেয়
    return sorter ? [...cows].sort(sorter) : cows;
}
