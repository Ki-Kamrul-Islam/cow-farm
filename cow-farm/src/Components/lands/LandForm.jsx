import Input from "../common/Input";
import Select from "../common/Select";
import {
    GRASS_TYPES,
    LAND_STATUSES,
    LAND_UNITS,
    SOIL_TYPES,
} from "../../constants/land";
import { validateLand } from "../../utils/landValidation";
import { toLandData } from "../../utils/landUtils";
import { NUMBER_INPUT_PROPS } from "../../utils/formUtils";
import { useRecordForm } from "../../hooks/useRecordForm";
import { useLanguage } from "../../hooks/useLanguage";

// জমির Form: শুধু "কোন ঘর কোথায়"। state ও আচরণ useRecordForm থেকে আসে।
function LandForm({
    id,
    initialValues,
    existingLands,
    editingId = null,
    onSubmit,
}) {
    const { t } = useLanguage();

    const { field, handleSubmit, toOptions } = useRecordForm({
        formId: id,
        initialValues,
        validate: (values) => validateLand(values, existingLands, editingId),
        toData: toLandData,
        onSubmit,
    });

    return (
        <form id={id} onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
                <Input
                    label={t("lands.form.landId")}
                    required
                    {...field("landId")}
                />
                <Input
                    label={t("lands.form.location")}
                    required
                    data-autofocus
                    {...field("location")}
                />

                <Input
                    label={t("lands.form.area")}
                    required
                    {...NUMBER_INPUT_PROPS}
                    {...field("area")}
                />
                <Select
                    label={t("lands.form.unit")}
                    options={toOptions(LAND_UNITS, "landUnit")}
                    {...field("unit")}
                />

                <Select
                    label={t("lands.form.soilType")}
                    options={toOptions(SOIL_TYPES, "soilType")}
                    {...field("soilType")}
                />
                <Select
                    label={t("lands.form.status")}
                    options={toOptions(LAND_STATUSES, "landStatus")}
                    {...field("status")}
                />

                <Input
                    label={t("lands.form.currentCrop")}
                    {...field("currentCrop")}
                />
                <Select
                    label={t("lands.form.grassType")}
                    options={toOptions(GRASS_TYPES, "grassType")}
                    {...field("grassType")}
                />

                <Input
                    label={t("lands.form.plantingDate")}
                    type="date"
                    {...field("plantingDate")}
                />
                <Input
                    label={t("lands.form.expectedHarvestDate")}
                    type="date"
                    {...field("expectedHarvestDate")}
                />

                <Input
                    label={t("lands.form.harvestQuantity")}
                    {...NUMBER_INPUT_PROPS}
                    {...field("harvestQuantity")}
                />
                <Input
                    label={t("lands.form.cost")}
                    {...NUMBER_INPUT_PROPS}
                    {...field("cost")}
                />
            </div>
        </form>
    );
}

export default LandForm;
