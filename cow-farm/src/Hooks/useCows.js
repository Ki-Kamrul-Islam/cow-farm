import { useContext } from "react";
import { CowContext } from "../context/CowContext";

// যেকোনো component-এ: const { cows, addCow } = useCows()
export function useCows() {
    const context = useContext(CowContext);

    if (!context) {
        throw new Error(
            "useCows অবশ্যই <CowProvider>-এর ভেতরে ব্যবহার করতে হবে",
        );
    }

    return context;
}
