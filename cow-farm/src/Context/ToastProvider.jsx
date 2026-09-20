import { useCallback, useMemo, useState } from "react";
import { ToastContext } from "./ToastContext";
import ToastContainer from "../components/common/ToastContainer";
import { generateId } from "../utils/id";

const AUTO_DISMISS_MS = 4000;

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const dismissToast = useCallback((id) => {
        setToasts((current) => current.filter((toast) => toast.id !== id));
    }, []);

    // type: 'success' | 'error' | 'info'
    const showToast = useCallback(
        (message, type = "success") => {
            const id = generateId();
            setToasts((current) => [...current, { id, message, type }]);
            setTimeout(() => dismissToast(id), AUTO_DISMISS_MS);
        },
        [dismissToast],
    );

    // useMemo: value একই থাকলে showToast ব্যবহারকারী component গুলো
    // প্রতিটি নতুন Toast-এ অকারণে আবার render হয় না
    const value = useMemo(() => ({ showToast }), [showToast]);

    return (
        <ToastContext.Provider value={value}>
            {children}
            <ToastContainer toasts={toasts} onDismiss={dismissToast} />
        </ToastContext.Provider>
    );
}
