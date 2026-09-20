import Badge from "../common/Badge";
import { LAND_STATUS_TONE } from "../../constants/land";
import { useLanguage } from "../../hooks/useLanguage";

function LandStatusBadge({ status }) {
    const { t } = useLanguage();

    return (
        <Badge tone={LAND_STATUS_TONE[status]}>
            {t(`landStatus.${status}`)}
        </Badge>
    );
}

export default LandStatusBadge;
