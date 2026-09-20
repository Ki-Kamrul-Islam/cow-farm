import { FiCheckCircle, FiAlertCircle, FiInfo, FiX } from "react-icons/fi";
import { useLanguage } from "../../hooks/useLanguage";

// পুরো class-এর নাম লিখতে হয় (Tailwind জোড়া-দেওয়া নাম চেনে না)
const TYPES = {
    success: { icon: FiCheckCircle, color: "text-success" },
    error: { icon: FiAlertCircle, color: "text-danger" },
    info: { icon: FiInfo, color: "text-info" },
};

function ToastContainer({ toasts, onDismiss }) {
    const { t } = useLanguage();

    return (
        // pointer-events-none: খালি জায়গা যেন নিচের বোতামে চাপা আটকে না দেয়
        <div
            aria-live="polite"
            className="pointer-events-none fixed inset-x-4 bottom-4 z-[70] flex flex-col gap-2 sm:inset-x-auto sm:right-4 sm:w-96"
        >
            {toasts.map((toast) => {
                const type = TYPES[toast.type] ?? TYPES.info;
                const Icon = type.icon;

                return (
                    <div
                        key={toast.id}
                        role="status"
                        className="pointer-events-auto flex items-start gap-3 rounded-xl border border-line bg-surface p-4 shadow-lg"
                    >
                        <Icon
                            size={20}
                            className={`mt-0.5 shrink-0 ${type.color}`}
                        />
                        <p className="min-w-0 flex-1 text-sm text-content">
                            {toast.message}
                        </p>
                        <button
                            type="button"
                            onClick={() => onDismiss(toast.id)}
                            aria-label={t("common.close")}
                            title={t("common.close")}
                            className="shrink-0 cursor-pointer text-muted transition-colors hover:text-content"
                        >
                            <FiX size={16} />
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default ToastContainer;
