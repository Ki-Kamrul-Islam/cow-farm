import { useContext } from "react";
import { LandContext } from "../context/LandContext";

// যেকোনো component-এ: const { lands, addLand, updateLand, deleteLand } = useLands()
export function useLands() {
    const context = useContext(LandContext);

    if (!context) {
        throw new Error(
            "useLands অবশ্যই <LandProvider>-এর ভেতরে ব্যবহার করতে হবে",
        );
    }

    const { items, add, update, remove, reset } = context;

    return {
        lands: items,
        addLand: add,
        updateLand: update,
        deleteLand: remove,
        resetDemoLands: reset,
    };
}
