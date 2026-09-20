import ThemeToggle from "./components/common/ThemeToggle";
import { useTheme } from "./hooks/useTheme";

// ⚠️ Tailwind পুরো class-এর নাম খুঁজে CSS বানায়।
// তাই `bg-${name}` এভাবে জোড়া দিয়ে লিখলে কাজ করত না, পুরো নাম লিখতে হয়।
const swatches = [
    { name: "primary", className: "bg-primary" },
    { name: "secondary", className: "bg-secondary" },
    { name: "accent", className: "bg-accent" },
    { name: "success", className: "bg-success" },
    { name: "warning", className: "bg-warning" },
    { name: "danger", className: "bg-danger" },
    { name: "info", className: "bg-info" },
];

function App() {
    const { theme } = useTheme();

    return (
        <div className="min-h-screen bg-background p-6">
            <div className="mx-auto max-w-2xl">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-primary">
                        🐄 Cow Farm Management
                    </h1>
                    <ThemeToggle />
                </div>

                <div className="mt-6 rounded-2xl border border-line bg-surface p-6 shadow-sm">
                    <p className="text-content">
                        Current theme:{" "}
                        <span className="font-semibold">{theme}</span>
                    </p>
                    <p className="mt-1 text-sm text-muted">
                        Page reload করলেও এই theme মনে থাকবে।
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {swatches.map((item) => (
                            <div key={item.name} className="text-center">
                                <div
                                    className={`h-12 rounded-lg ${item.className}`}
                                />
                                <p className="mt-1 text-xs text-muted">
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        className="mt-6 cursor-pointer rounded-lg bg-primary px-4 py-2 font-medium text-on-primary transition-colors hover:bg-primary-hover"
                    >
                        Primary Button
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
