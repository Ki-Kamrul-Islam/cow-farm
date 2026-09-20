import { createCrudService } from "./createCrudService";
import { STORAGE_KEYS } from "../constants/storageKeys";
import { DEMO_LANDS } from "../data/landsDemo";
import { generateLandId } from "../utils/landUtils";

// গরুর service-এর সাথে প্রায় হুবহু। শুধু নামগুলো আলাদা।
export const landService = createCrudService({
    storageKey: STORAGE_KEYS.lands,
    seed: DEMO_LANDS,
    prepareNew: (data, lands) => ({
        ...data,
        landId: data.landId || generateLandId(lands), // আইডি না দিলে নিজে বানাবে
    }),
});
