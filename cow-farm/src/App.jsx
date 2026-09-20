import ThemeToggle from "./components/common/ThemeToggle";
import LanguageSwitch from "./components/common/LanguageSwitch";
import { useTheme } from "./hooks/useTheme";
import { useLanguage } from "./hooks/useLanguage";

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
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-background p-6">
            <div className="mx-auto max-w-2xl">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <h1 className="text-2xl font-bold text-primary">
                        🐄 {t("app.name")}
                    </h1>

                    <div className="flex items-center gap-2">
                        <LanguageSwitch />
                        <ThemeToggle />
                    </div>
                </div>

                <div className="mt-6 rounded-2xl border border-line bg-surface p-6 shadow-sm">
                    <p className="text-content">
                        {t("demo.currentTheme")}:{" "}
                        <span className="font-semibold">
                            {t(`theme.${theme}`)}
                        </span>
                    </p>
                    <p className="mt-1 text-sm text-muted">
                        {t("demo.persistNote")}
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
                        {t("demo.primaryButton")}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
