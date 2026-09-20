import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { storageService } from "../services/storageService";
import { STORAGE_KEYS } from "../constants/storageKeys";

// শুরুতে কোন theme হবে সেটা ঠিক করে
function getInitialTheme() {
    const saved = storageService.get(STORAGE_KEYS.theme);
    if (saved === "light" || saved === "dark") return saved;

    // আগে কিছু save না থাকলে user-এর কম্পিউটারের পছন্দ অনুযায়ী
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(getInitialTheme);

    // theme বদলালেই: <html>-এ class বসাও/সরাও এবং save করো
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        storageService.set(STORAGE_KEYS.theme, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((current) => (current === "dark" ? "light" : "dark"));
    };

    const value = {
        theme, // 'light' অথবা 'dark'
        isDark: theme === "dark",
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}
