import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";

// যেকোনো component-এ: const { showToast } = useToast()
export function useToast() {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error(
            "useToast অবশ্যই <ToastProvider>-এর ভেতরে ব্যবহার করতে হবে",
        );
    }

    return context;
}
