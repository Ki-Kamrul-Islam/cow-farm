// সংখ্যা, টাকা ও তারিখ সাজানোর function।
// এগুলো "pure function": React জানে না, শুধু ইনপুট নিয়ে সাজানো লেখা ফেরত দেয়।

const CURRENCY_SYMBOL = "৳";

export function formatNumber(value, locale, options = {}) {
    const number = Number(value);
    if (!Number.isFinite(number)) return "-"; // ভুল/খালি মান হলে crash না করে '-'

    return new Intl.NumberFormat(locale, {
        maximumFractionDigits: 2,
        ...options,
    }).format(number);
}

export function formatCurrency(value, locale) {
    const number = Number(value);
    if (!Number.isFinite(number)) return "-";

    // ঋণাত্মক হলে চিহ্ন আগে বসাই: -৳ 12,000 (৳ -12,000 নয়)
    const sign = number < 0 ? "-" : "";
    return `${sign}${CURRENCY_SYMBOL} ${formatNumber(Math.abs(number), locale)}`;
}

export function formatDate(date, locale) {
    return new Intl.DateTimeFormat(locale, { dateStyle: "full" }).format(date);
}

// ===================================
// '2026-09-20' → '২০ সেপ্টেম্বর' / '20 Sept'
export function formatShortDate(isoDate, locale) {
    // T00:00:00 যোগ করায় স্থানীয় সময় ধরা হয়, তাই তারিখ একদিন আগে-পরে সরে যায় না
    const date = new Date(`${isoDate}T00:00:00`);
    return new Intl.DateTimeFormat(locale, {
        day: "numeric",
        month: "short",
    }).format(date);
}

// '2026-09' → 'সেপ্টেম্বর' / 'Sept'
export function formatMonth(isoMonth, locale) {
    const date = new Date(`${isoMonth}-01T00:00:00`);
    return new Intl.DateTimeFormat(locale, { month: "short" }).format(date);
}
//
// '2026-10-15' → '১৫ অক্টো, ২০২৬' / '15 Oct 2026'। তারিখ খালি হলে '-'
export function formatISODate(isoDate, locale) {
    if (!isoDate) return "-";

    const date = new Date(`${isoDate}T00:00:00`);
    if (Number.isNaN(date.getTime())) return "-";

    return new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(
        date,
    );
}
