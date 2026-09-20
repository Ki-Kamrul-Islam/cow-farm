// পাতা ভাগ। গরু নিয়ে কিছুই জানে না, তাই Milk, Expense সব তালিকায় কাজে লাগবে।

// items থেকে শুধু বর্তমান পাতার অংশ কেটে দেয়, সাথে পাতার তথ্যও
export function paginate(items, page, pageSize) {
    const totalItems = items.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

    // পাতা নম্বর সীমার বাইরে গেলে (যেমন শেষ পাতার শেষ গরু মুছে ফেলা হলে) সীমার ভেতরে টেনে আনি
    const currentPage = Math.min(Math.max(1, page), totalPages);

    const start = (currentPage - 1) * pageSize;
    const end = Math.min(start + pageSize, totalItems);

    return {
        pageItems: items.slice(start, end),
        currentPage,
        totalPages,
        totalItems,
        startIndex: totalItems === 0 ? 0 : start + 1, // "১১–১২"-এর ১১
        endIndex: end, // "১১–১২"-এর ১২
    };
}

// বোতামে কী কী দেখাবে: [1, 'ellipsis', 4, 5, 6, 'ellipsis', 20]
export function getPageNumbers(current, total) {
    if (total <= 7)
        return Array.from({ length: total }, (_, index) => index + 1);

    // প্রথম, শেষ ও বর্তমান পাতা এবং তার দুই পাশের পাতা
    const wanted = [1, total, current - 1, current, current + 1];
    const pages = [...new Set(wanted)]
        .filter((page) => page >= 1 && page <= total)
        .sort((a, b) => a - b);

    const result = [];
    pages.forEach((page, index) => {
        if (index > 0) {
            const gap = page - pages[index - 1];
            if (gap === 2)
                result.push(page - 1); // মাঝে মাত্র ১টি পাতা: '...' না দিয়ে সেটাই দেখাই
            else if (gap > 2) result.push("ellipsis");
        }
        result.push(page);
    });

    return result;
}
