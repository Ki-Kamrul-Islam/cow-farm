const TONES = {
    success: "bg-success/10 text-success",
    info: "bg-info/10 text-info",
    warning: "bg-warning/10 text-warning",
    danger: "bg-danger/10 text-danger",
    neutral: "bg-line text-muted",
};

// ছোট রঙিন লেবেল: status, ধরন ইত্যাদি দেখানোর জন্য
function Badge({ tone = "neutral", children }) {
    return (
        <span
            className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium ${
                TONES[tone] ?? TONES.neutral
            }`}
        >
            {children}
        </span>
    );
}

export default Badge;
