import {
    ACRES_PER_UNIT,
    LAND_DEFAULTS,
    LAND_FORM_FIELDS,
    LAND_NUMBER_FIELDS,
} from "../constants/land";
import {
    toFormValues as buildFormValues,
    toRecordData,
    nextSequentialId,
} from "./formUtils";

const LAND_FORM_CONFIG = {
    defaults: LAND_DEFAULTS,
    fields: LAND_FORM_FIELDS,
    numberFields: LAND_NUMBER_FIELDS,
};

// যেকোনো এককের জমিকে একরে রূপান্তর। toAcres(50, 'decimal') → 0.5
// অজানা এককের জমি হিসাবে ধরা হয় না (০)
export function toAcres(area, unit) {
    return (Number(area) || 0) * (ACRES_PER_UNIT[unit] ?? 0);
}

// সব জমির মোট আয়তন (একরে)
export function totalAcres(lands) {
    return lands.reduce((sum, land) => sum + toAcres(land.area, land.unit), 0);
}

// যেসব জমিতে ঘাস চাষ হয় শুধু সেগুলোর মোট আয়তন (একরে)
export function grassLandAcres(lands) {
    return totalAcres(
        lands.filter((land) => land.grassType && land.grassType !== "none"),
    );
}

// পরের জমির আইডি: LAND-007
export const generateLandId = (lands) =>
    nextSequentialId(lands, "landId", "LAND");

export const toLandFormValues = (land) =>
    buildFormValues(land, LAND_FORM_CONFIG);
export const toLandData = (values) => toRecordData(values, LAND_FORM_CONFIG);
