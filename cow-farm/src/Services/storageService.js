// LocalStorage-এ data পড়া/লেখার একমাত্র জায়গা।
// পরে Backend যোগ করলে শুধু এই স্তর বদলাবে।

const PREFIX = "cowfarm:"; // অন্য website-এর data-র সাথে যেন মিশে না যায়

export const storageService = {
    get(key, fallback = null) {
        try {
            const raw = localStorage.getItem(PREFIX + key);
            return raw === null ? fallback : JSON.parse(raw);
        } catch {
            return fallback; // data নষ্ট থাকলে app যেন crash না করে
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(PREFIX + key, JSON.stringify(value));
        } catch {
            // storage ভরে গেলে বা বন্ধ থাকলে চুপচাপ এড়িয়ে যাই
        }
    },

    remove(key) {
        try {
            localStorage.removeItem(PREFIX + key);
        } catch {
            // এড়িয়ে যাই
        }
    },
};

/*
🧠 ব্যাখ্যা
JSON.stringify / JSON.parse কেন? LocalStorage শুধু লেখা (string) রাখতে পারে। গরুর তালিকা বা object রাখতে হলে আগে লেখায় রূপান্তর (stringify), আর পড়ার সময় আবার ফিরিয়ে আনতে (parse) হয়।
try...catch কেন? LocalStorage অনেক সময় fail করে (private browsing, storage ভরে যাওয়া)। try এর ভেতরে ঝুঁকিপূর্ণ কাজ করি, ব্যর্থ হলে catch ধরে ফেলে, ফলে পুরো website বন্ধ হয় না।
fallback = null কী? কিছু না পেলে কী ফেরত দেবে তার default মান।
PREFIX: আসল key হবে cowfarm:theme।
*/
