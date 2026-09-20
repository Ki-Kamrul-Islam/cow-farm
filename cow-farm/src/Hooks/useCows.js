import { useContext } from "react";
import { CowContext } from "../context/CowContext";

// যেকোনো component-এ: const { cows, addCow, updateCow, deleteCow } = useCows()
// ভেতরের সাধারণ নাম (items, add...) এখানে গরুর নামে অনুবাদ হয়।
// এটাকে বলে "adapter": পুরোনো ব্যবহারকারীদের জন্য আগের চেহারা বজায় রাখা।
export function useCows() {
    const context = useContext(CowContext);

    if (!context) {
        throw new Error(
            "useCows অবশ্যই <CowProvider>-এর ভেতরে ব্যবহার করতে হবে",
        );
    }

    const { items, add, update, remove, reset } = context;

    return {
        cows: items,
        addCow: add,
        updateCow: update,
        deleteCow: remove,
        resetDemoCows: reset,
    };
}
