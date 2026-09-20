import { useEffect } from "react";

// Tailwind-এর `lg` = ১০২৪px। এর বেশি চওড়া হলে Desktop Sidebar দেখা যায়।
const DESKTOP_QUERY = "(min-width: 1024px)";

function MobileDrawer({ isOpen, onClose, label, children }) {
    // Drawer খোলা থাকলে তিনটি কাজ চালু থাকে, বন্ধ হলে তিনটিই সরে যায়
    useEffect(() => {
        if (!isOpen) return;

        // ১. Esc চাপলে বন্ধ
        const handleKeyDown = (event) => {
            if (event.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKeyDown);

        // ২. খোলা অবস্থায় window বড় করে Desktop মাপে গেলে বন্ধ
        const mediaQuery = window.matchMedia(DESKTOP_QUERY);
        const handleResize = (event) => {
            if (event.matches) onClose();
        };
        mediaQuery.addEventListener("change", handleResize);

        // ৩. পেছনের page-এর scroll বন্ধ
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        // পরিষ্কার-পরিচ্ছন্নতা: drawer বন্ধ হলে সব আগের অবস্থায় ফেরাও
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            mediaQuery.removeEventListener("change", handleResize);
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen, onClose]);

    return (
        <div className="lg:hidden">
            {/* পেছনের গাঢ় পর্দা: চাপলে drawer বন্ধ */}
            <div
                onClick={onClose}
                aria-hidden="true"
                className={`fixed inset-0 z-40 bg-overlay transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
            />

            {/* পাশ থেকে আসা প্যানেল */}
            <aside
                role="dialog"
                aria-modal="true"
                aria-label={label}
                className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] border-r border-line bg-surface shadow-xl transition-[translate,visibility] duration-300 ease-in-out ${
                    isOpen ?
                        "visible translate-x-0"
                    :   "invisible -translate-x-full"
                }`}
            >
                {children}
            </aside>
        </div>
    );
}

export default MobileDrawer;
