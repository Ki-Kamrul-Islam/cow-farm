import { useState } from "react";

// 🏭 যেকোনো module-এর Provider এই একটিই।
// context → সেই module-এর Context (যেমন CowContext)
// service → সেই module-এর service (createCrudService-এর ফল)
export function CrudProvider({ context: Context, service, children }) {
    // 🧠 State: তালিকা। শুরুতে service থেকে একবার পড়া হয়
    const [items, setItems] = useState(() => service.getAll());

    // service-এ যা-ই করি, শেষে সেখান থেকে নতুন তালিকা পড়ে state মিলিয়ে নিই
    // (নিয়ম: LocalStorage-ই সত্য)
    const refresh = () => setItems(service.getAll());

    const add = (data) => {
        const created = service.create(data);
        refresh();
        return created;
    };

    const update = (id, changes) => {
        const updated = service.update(id, changes);
        refresh();
        return updated;
    };

    const remove = (id) => {
        const removed = service.remove(id);
        refresh();
        return removed;
    };

    const reset = () => {
        service.resetToSeed();
        refresh();
    };

    const value = { items, add, update, remove, reset };

    return <Context.Provider value={value}>{children}</Context.Provider>;
}
