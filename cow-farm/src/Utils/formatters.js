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
