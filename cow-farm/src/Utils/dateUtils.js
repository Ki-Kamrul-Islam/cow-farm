// তারিখ নিয়ে ছোট ছোট সহায়ক function।
// তারিখ আমরা '2026-09-20' আকারের লেখায় (ISO format) রাখি।
// এটা LocalStorage/API-তে রাখা সহজ, আর সাজিয়ে দেখানো UI-র কাজ।

const pad = (number) => String(number).padStart(2, "0"); // 5 → '05'

export function toISODate(date) {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function toISOMonth(date) {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}`;
}

// শেষ n দিনের তারিখ, পুরোনো থেকে নতুন ক্রমে (শেষটি আজ)
export function lastNDays(count, from = new Date()) {
    return Array.from({ length: count }, (_, index) => {
        const offset = count - 1 - index;
        return toISODate(
            new Date(
                from.getFullYear(),
                from.getMonth(),
                from.getDate() - offset,
            ),
        );
    });
}

// শেষ n মাস, পুরোনো থেকে নতুন ক্রমে (শেষটি এই মাস)
export function lastNMonths(count, from = new Date()) {
    return Array.from({ length: count }, (_, index) => {
        const offset = count - 1 - index;
        return toISOMonth(
            new Date(from.getFullYear(), from.getMonth() - offset, 1),
        );
    });
}
