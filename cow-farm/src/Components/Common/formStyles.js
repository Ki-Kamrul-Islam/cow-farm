// Input, Select, Textarea, SearchBar-এর একই চেহারা এক জায়গায়। error থাকলে border লাল।
// padding: ভেতরের ফাঁক। SearchBar-এ আইকনের জায়গা রাখতে আলাদা মান দেয়
export function controlClass(hasError, padding = "px-3") {
    return `w-full rounded-lg border bg-surface ${padding} py-2 text-sm text-content placeholder:text-muted focus:outline-2 focus:outline-primary disabled:cursor-not-allowed disabled:opacity-50 ${
        hasError ? "border-danger" : "border-line"
    }`;
}
