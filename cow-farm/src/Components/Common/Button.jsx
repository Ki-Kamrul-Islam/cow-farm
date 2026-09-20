// প্রকারভেদ: পুরো name লিখতে হয় (Tailwind জোড়া-দেওয়া class চেনে না)
const VARIANTS = {
    primary: "bg-primary text-on-primary hover:bg-primary-hover",
    secondary: "border border-line bg-surface text-content hover:bg-background",
    danger: "bg-danger text-on-primary hover:opacity-90",
    ghost: "text-content hover:bg-line",
};

const SIZES = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    icon: "h-8 w-8",
};

// icon: ঐচ্ছিক icon component (যেমন FiPlus)
// ...rest: onClick, disabled, title ইত্যাদি বাকি সবকিছু সরাসরি <button>-এ যায়
function Button({
    children,
    variant = "primary",
    size = "md",
    icon: Icon,
    type = "button",
    className = "",
    ...rest
}) {
    return (
        <button
            type={type}
            className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50 ${
                VARIANTS[variant] ?? VARIANTS.primary
            } ${SIZES[size] ?? SIZES.md} ${className}`}
            {...rest}
        >
            {Icon && <Icon size={16} className="shrink-0" />}
            {children}
        </button>
    );
}

export default Button;
