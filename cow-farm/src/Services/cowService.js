import { createCrudService } from "./createCrudService";
import { STORAGE_KEYS } from "../constants/storageKeys";
import { DEMO_COWS } from "../data/cowsDemo";
import { generateCowId } from "../utils/cowUtils";

// আগে এই file-এ ~৫০ লাইন ছিল। এখন গরুর শুধু নিজস্ব অংশটুকু:
// কোন key, কোন নমুনা, আর নতুন গরুর আইডি না দিলে কী হবে।
export const cowService = createCrudService({
    storageKey: STORAGE_KEYS.cows,
    seed: DEMO_COWS,
    prepareNew: (data, cows) => ({
        ...data,
        cowId: data.cowId || generateCowId(cows), // আইডি না দিলে নিজে বানাবে
    }),
});
