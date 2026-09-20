import { Link } from "react-router-dom";
import { PATHS } from "../constants/paths";
import { useLanguage } from "../hooks/useLanguage";

function NotFoundPage() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col items-center py-16 text-center">
            <p className="text-6xl">🐄❓</p>
            <h1 className="mt-4 text-2xl font-bold text-content">
                {t("notFound.title")}
            </h1>
            <p className="mt-2 text-muted">{t("notFound.message")}</p>

            <Link
                to={PATHS.dashboard}
                className="mt-6 rounded-lg bg-primary px-4 py-2 font-medium text-on-primary transition-colors hover:bg-primary-hover"
            >
                {t("notFound.backHome")}
            </Link>
        </div>
    );
}

export default NotFoundPage;
