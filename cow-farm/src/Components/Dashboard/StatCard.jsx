import Card from "../common/Card";

// ⚠️ Tailwind পুরো class-এর নাম খুঁজে CSS বানায়, তাই `bg-${tone}/10`
// এভাবে জোড়া দেওয়া যাবে না। পুরো নাম আগে থেকে লিখে রাখতে হয়।
const TONES = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/20 text-primary",
    success: "bg-success/10 text-success",
    info: "bg-info/10 text-info",
    warning: "bg-warning/10 text-warning",
    danger: "bg-danger/10 text-danger",
};

function StatCard({ label, value, unit, icon: Icon, tone = "primary" }) {
    return (
        <Card className="flex items-center gap-4">
            <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    TONES[tone] ?? TONES.primary
                }`}
            >
                <Icon size={22} />
            </span>

            <div className="min-w-0">
                <p className="truncate text-sm text-muted">{label}</p>
                <p className="mt-0.5 text-xl font-bold text-content sm:text-2xl">
                    {value}
                    {unit && (
                        <span className="ml-1 text-sm font-medium text-muted">
                            {unit}
                        </span>
                    )}
                </p>
            </div>
        </Card>
    );
}

export default StatCard;
