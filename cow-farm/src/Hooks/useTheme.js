import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// যেকোনো component-এ লিখলেই theme পাওয়া যাবে: const { theme } = useTheme()
export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme অবশ্যই <ThemeProvider>-এর ভেতরে ব্যবহার করতে হবে",
        );
    }

    return context;
}
