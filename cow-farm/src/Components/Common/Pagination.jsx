import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Button from "./Button";
import { getPageNumbers } from "../../utils/pagination";
import { useLanguage } from "../../hooks/useLanguage";
import { useFormatters } from "../../hooks/useFormatters";

// paginate() যা ফেরত দেয় সেই তথ্য নেয়। যেকোনো তালিকায় ব্যবহারযোগ্য।
function Pagination({
    currentPage,
    totalPages,
    totalItems,
    startIndex,
    endIndex,
    onPageChange,
    className = "",
}) {
    const { t } = useLanguage();
    const { formatNumber } = useFormatters();

    if (totalItems === 0) return null;

    return (
        <div
            className={`flex flex-col items-center gap-3 sm:flex-row sm:justify-between ${className}`}
        >
            <p className="text-sm text-muted">
                {t("pagination.showing", {
                    from: formatNumber(startIndex),
                    to: formatNumber(endIndex),
                    total: formatNumber(totalItems),
                })}
            </p>

            {/* একটি মাত্র পাতা হলে বোতামের দরকার নেই */}
            {totalPages > 1 && (
                <nav
                    aria-label={t("pagination.label")}
                    className="flex items-center gap-1"
                >
                    <Button
                        variant="secondary"
                        size="icon"
                        icon={FiChevronLeft}
                        disabled={currentPage === 1}
                        onClick={() => onPageChange(currentPage - 1)}
                        aria-label={t("pagination.previous")}
                        title={t("pagination.previous")}
                    />

                    {getPageNumbers(currentPage, totalPages).map(
                        (item, index) =>
                            item === "ellipsis" ?
                                <span
                                    key={`ellipsis-${index}`}
                                    aria-hidden="true"
                                    className="px-1 text-muted"
                                >
                                    …
                                </span>
                            :   <Button
                                    key={item}
                                    variant={
                                        item === currentPage ? "primary" : (
                                            "ghost"
                                        )
                                    }
                                    size="icon"
                                    aria-current={
                                        item === currentPage ? "page" : (
                                            undefined
                                        )
                                    }
                                    aria-label={t("pagination.page", {
                                        page: formatNumber(item),
                                    })}
                                    onClick={() => onPageChange(item)}
                                >
                                    {formatNumber(item)}
                                </Button>,
                    )}

                    <Button
                        variant="secondary"
                        size="icon"
                        icon={FiChevronRight}
                        disabled={currentPage === totalPages}
                        onClick={() => onPageChange(currentPage + 1)}
                        aria-label={t("pagination.next")}
                        title={t("pagination.next")}
                    />
                </nav>
            )}
        </div>
    );
}

export default Pagination;
