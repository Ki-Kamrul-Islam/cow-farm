import { useLanguage } from "./useLanguage";
import { getLocale } from "../constants/languages";
import {
    formatNumber as baseFormatNumber,
    formatCurrency as baseFormatCurrency,
    formatDate as baseFormatDate,
    formatShortDate as baseFormatShortDate,
    formatMonth as baseFormatMonth,
} from "../utils/formatters";

// যেকোনো component-এ: const { formatNumber, formatCurrency } = useFormatters()
// বর্তমান ভাষার locale নিজে নিজে ভরে দেয়, তাই বারবার locale লিখতে হয় না।
export function useFormatters() {
    const { language } = useLanguage();
    const locale = getLocale(language);

    return {
        formatNumber: (value, options) =>
            baseFormatNumber(value, locale, options),
        formatCurrency: (value) => baseFormatCurrency(value, locale),
        formatDate: (value) => baseFormatDate(value, locale),
        formatShortDate: (value) => baseFormatShortDate(value, locale),
        formatMonth: (value) => baseFormatMonth(value, locale),
    };
}
