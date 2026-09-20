import { storageService } from "./storageService";
import { generateId } from "../utils/id";

// 🏭 CRUD service-এর কারখানা।
// CRUD = Create (যোগ), Read (পড়া), Update (বদল), Delete (মোছা)
//
// options:
//   storageKey → কোন নামে LocalStorage-এ রাখবে (STORAGE_KEYS থেকে)
//   seed       → প্রথমবার বসানোর নমুনা তালিকা (না দিলে খালি)
//   prepareNew → ঐচ্ছিক: (data, বর্তমান তালিকা) => data
//                নতুন item রাখার আগে বাড়তি field বসানোর সুযোগ (যেমন স্বয়ংক্রিয় আইডি)
//
// ⚠️ এখনকার function-গুলো সাধারণ (synchronous)। পরে সত্যিকারের Backend/API যোগ
// করলে শুধু এই file বদলাবে। Page ও component-এ হাত দিতে হবে না।
export function createCrudService({ storageKey, seed = [], prepareNew }) {
    const writeAll = (items) => storageService.set(storageKey, items);

    const readAll = () => {
        const saved = storageService.get(storageKey, null);
        if (Array.isArray(saved)) return saved;

        // এখনো কিছুই সংরক্ষিত নেই (প্রথমবার): নমুনা বসিয়ে দাও
        writeAll(seed);
        return seed;
    };

    return {
        getAll: readAll,

        getById(id) {
            return readAll().find((item) => item.id === id) ?? null;
        },

        create(data) {
            const items = readAll();
            const now = new Date().toISOString();
            const prepared = prepareNew ? prepareNew(data, items) : data;

            const item = {
                ...prepared,
                id: generateId(),
                createdAt: now,
                updatedAt: now,
            };
            writeAll([...items, item]);
            return item;
        },

        update(id, changes) {
            const items = readAll();
            const current = items.find((item) => item.id === id);
            if (!current) return null;

            const updated = {
                ...current,
                ...changes,
                id,
                updatedAt: new Date().toISOString(),
            };
            writeAll(items.map((item) => (item.id === id ? updated : item)));
            return updated;
        },

        remove(id) {
            const items = readAll();
            const remaining = items.filter((item) => item.id !== id);
            writeAll(remaining);
            return remaining.length !== items.length; // মুছেছে কিনা
        },

        resetToSeed() {
            writeAll(seed);
            return seed;
        },
    };
}
