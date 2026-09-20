import Badge from "../common/Badge";
import { COW_STATUS_TONE } from "../../constants/cow";
import { useLanguage } from "../../hooks/useLanguage";

// status-এর কোড ('active') নিয়ে অনুবাদ করা নাম ও রঙ ঠিক করে দেখায়
function CowStatusBadge({ status }) {
    const { t } = useLanguage();

    return (
        <Badge tone={COW_STATUS_TONE[status]}>{t(`cowStatus.${status}`)}</Badge>
    );
}

export default CowStatusBadge;
