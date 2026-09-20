import { storageService } from "./storageService";
import { STORAGE_KEYS } from "../constants/storageKeys";
import { DEMO_COWS } from "../data/cowsDemo";
import { generateId } from "../utils/id";
import { generateCowId } from "../utils/cowUtils";

// গরুর সব data পড়া-লেখার একমাত্র জায়গা।
// UI কখনো সরাসরি storageService বা localStorage ছোঁবে না।
//
// ⚠️ এখনকার function-গুলো সাধারণ (synchronous)। পরে সত্যিকারের Backend/API যোগ
// করলে এগুলো async হবে এবং hook/Provider-এর ভেতরে ছোট পরিবর্তন লাগবে।
// Page ও component-এ হাত দিতে হবে না।

function readAll() {
    const saved = storageService.get(STORAGE_KEYS.cows, null);
    if (Array.isArray(saved)) return saved;

    // এখনো কিছুই সংরক্ষিত নেই (প্রথমবার): নমুনা গরু বসিয়ে দাও
    writeAll(DEMO_COWS);
    return DEMO_COWS;
}

function writeAll(cows) {
    storageService.set(STORAGE_KEYS.cows, cows);
}

export const cowService = {
    getAll() {
        return readAll();
    },

    getById(id) {
        return readAll().find((cow) => cow.id === id) ?? null;
    },

    create(data) {
        const cows = readAll();
        const now = new Date().toISOString();

        const cow = {
            ...data,
            id: generateId(),
            cowId: data.cowId || generateCowId(cows), // আইডি না দিলে নিজে বানাবে
            createdAt: now,
            updatedAt: now,
        };

        writeAll([...cows, cow]);
        return cow;
    },

    update(id, changes) {
        const cows = readAll();
        const current = cows.find((cow) => cow.id === id);
        if (!current) return null;

        const updated = {
            ...current,
            ...changes,
            id,
            updatedAt: new Date().toISOString(),
        };
        writeAll(cows.map((cow) => (cow.id === id ? updated : cow)));
        return updated;
    },

    remove(id) {
        const cows = readAll();
        const remaining = cows.filter((cow) => cow.id !== id);
        writeAll(remaining);
        return remaining.length !== cows.length; // মুছেছে কিনা
    },

    resetToDemo() {
        writeAll(DEMO_COWS);
        return DEMO_COWS;
    },
};
