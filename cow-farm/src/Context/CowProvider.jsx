import { CrudProvider } from "./CrudProvider";
import { CowContext } from "./CowContext";
import { cowService } from "../services/cowService";

export function CowProvider({ children }) {
    return (
        <CrudProvider context={CowContext} service={cowService}>
            {children}
        </CrudProvider>
    );
}
