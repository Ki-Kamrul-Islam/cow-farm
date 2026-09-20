import { CrudProvider } from "./CrudProvider";
import { LandContext } from "./LandContext";
import { landService } from "../services/landService";

export function LandProvider({ children }) {
    return (
        <CrudProvider context={LandContext} service={landService}>
            {children}
        </CrudProvider>
    );
}
