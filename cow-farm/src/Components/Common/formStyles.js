// Input, Select, Textarea তিনটির একই চেহারা এক জায়গায়। error থাকলে border লাল।
export function controlClass(hasError) {
    return `w-full rounded-lg border bg-surface px-3 py-2 text-sm text-content placeholder:text-muted focus:outline-2 focus:outline-primary disabled:cursor-not-allowed disabled:opacity-50 ${
        hasError ? "border-danger" : "border-line"
    }`;
}
