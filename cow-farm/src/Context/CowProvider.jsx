import { useState } from "react";
import { CowContext } from "./CowContext";
import { cowService } from "../services/cowService";

export function CowProvider({ children }) {
    // 🧠 State: গরুর তালিকা। শুরুতে service থেকে একবার পড়া হয়
    const [cows, setCows] = useState(() => cowService.getAll());

    // service-এ যা-ই করি, শেষে সেখান থেকে নতুন তালিকা পড়ে state মিলিয়ে নিই
    const refresh = () => setCows(cowService.getAll());

    const addCow = (data) => {
        const created = cowService.create(data);
        refresh();
        return created;
    };

    const updateCow = (id, changes) => {
        const updated = cowService.update(id, changes);
        refresh();
        return updated;
    };

    const deleteCow = (id) => {
        const removed = cowService.remove(id);
        refresh();
        return removed;
    };

    const resetDemoCows = () => {
        cowService.resetToDemo();
        refresh();
    };

    const value = { cows, addCow, updateCow, deleteCow, resetDemoCows };

    return <CowContext.Provider value={value}>{children}</CowContext.Provider>;
}
