import { useEffect, useId, useRef } from "react";
import { FiX } from "react-icons/fi";
import { useLanguage } from "../../hooks/useLanguage";

const SIZES = {
    sm: "sm:max-w-md",
    md: "sm:max-w-lg",
    lg: "sm:max-w-3xl",
};

// isOpen: খোলা কি বন্ধ | onClose: বন্ধ করার function | title: শিরোনাম
// footer: নিচের বোতামের অংশ (scroll হয় না, সবসময় দেখা যায়)
// closeOnOverlayClick: পেছনে চাপলে বন্ধ হবে কিনা (Form-এ false, নইলে ভুল করে লেখা হারায়)
// ভেতরে data-autofocus দেওয়া ঘরে খোলার সময় cursor যায়
function Modal({
    isOpen,
    onClose,
    title,
    size = "md",
    closeOnOverlayClick = true,
    footer,
    children,
}) {
    const { t } = useLanguage();
    const titleId = useId();
    const panelRef = useRef(null);

    // সবসময় সর্বশেষ onClose মনে রাখি। এতে নিচের effect-কে onClose-এর উপর নির্ভর
    // করাতে হয় না, ফলে বাবা component আবার render হলেও effect ভেঙে-গড়ে না।
    const onCloseRef = useRef(onClose);
    useEffect(() => {
        onCloseRef.current = onClose;
    });

    useEffect(() => {
        if (!isOpen) return;

        // খোলার আগে কোথায় focus ছিল মনে রাখি, বন্ধ হলে সেখানে ফেরত দিই
        const previouslyFocused = document.activeElement;

        const focusTarget =
            panelRef.current?.querySelector("[data-autofocus]") ??
            panelRef.current;
        focusTarget?.focus();

        const handleKeyDown = (event) => {
            if (event.key === "Escape") onCloseRef.current();
        };
        document.addEventListener("keydown", handleKeyDown);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = previousOverflow;
            previouslyFocused?.focus?.();
        };
    }, [isOpen]);

    // বন্ধ থাকলে কিছুই আঁকি না। তাই ভেতরের Form প্রতিবার নতুন করে শুরু হয়।
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-4">
            {/* পেছনের গাঢ় পর্দা */}
            <div
                onClick={closeOnOverlayClick ? onClose : undefined}
                aria-hidden="true"
                className="absolute inset-0 bg-overlay"
            />

            {/* মূল বাক্স: Mobile-এ নিচ থেকে ওঠা, বড় screen-এ মাঝখানে */}
            <div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                tabIndex={-1}
                className={`relative flex max-h-[90vh] w-full flex-col rounded-t-2xl border border-line bg-surface shadow-xl outline-none sm:rounded-2xl ${
                    SIZES[size] ?? SIZES.md
                }`}
            >
                <div className="flex shrink-0 items-center justify-between gap-3 border-b border-line px-5 py-4">
                    <h2
                        id={titleId}
                        className="min-w-0 truncate text-lg font-semibold text-content"
                    >
                        {title}
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label={t("common.close")}
                        title={t("common.close")}
                        className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-muted transition-colors hover:bg-background hover:text-content"
                    >
                        <FiX size={18} />
                    </button>
                </div>

                <div className="overflow-y-auto px-5 py-4">{children}</div>

                {footer && (
                    <div className="flex shrink-0 flex-wrap justify-end gap-2 border-t border-line px-5 py-3">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modal;
