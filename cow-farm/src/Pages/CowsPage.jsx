import { FaCow } from "react-icons/fa6";
import { FiInfo, FiRefreshCw } from "react-icons/fi";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import EmptyState from "../components/common/EmptyState";
import CowTable from "../components/cows/CowTable";
import { useCows } from "../hooks/useCows";
import { useLanguage } from "../hooks/useLanguage";
import { useFormatters } from "../hooks/useFormatters";

function CowsPage() {
    const { t } = useLanguage();
    const { formatNumber } = useFormatters();
    const { cows, resetDemoCows } = useCows();

    return (
        <div>
            {/* শিরোনাম ও বোতাম */}
            <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-content">
                        {t("nav.cows")}
                    </h1>
                    <p className="mt-1 text-sm text-muted">
                        {t("cows.total")}: {formatNumber(cows.length)}
                    </p>
                </div>

                <Button
                    variant="secondary"
                    icon={FiRefreshCw}
                    onClick={resetDemoCows}
                >
                    {t("cows.resetDemo")}
                </Button>
            </div>

            {/* নমুনা data-র সতর্কতা (আসল data-র সুবিধা এলে মুছে ফেলব) */}
            <div className="mt-4 flex items-start gap-2 rounded-lg border border-info/30 bg-info/10 px-4 py-3 text-sm text-info">
                <FiInfo className="mt-0.5 shrink-0" />
                <p>{t("cows.demoNote")}</p>
            </div>

            {/* তালিকা বা "কোনো গরু নেই" */}
            <div className="mt-6">
                {cows.length === 0 ?
                    <EmptyState
                        icon={FaCow}
                        title={t("cows.empty.title")}
                        description={t("cows.empty.description")}
                    />
                :   <Card padded={false} className="overflow-hidden">
                        <CowTable cows={cows} />
                    </Card>
                }
            </div>
        </div>
    );
}

export default CowsPage;
