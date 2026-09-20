import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeProvider.jsx";
import { LanguageProvider } from "./context/LanguageProvider.jsx";
import { CowProvider } from "./context/CowProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider>
            <LanguageProvider>
                <CowProvider>
                    <App />
                </CowProvider>
            </LanguageProvider>
        </ThemeProvider>
    </StrictMode>,
);
