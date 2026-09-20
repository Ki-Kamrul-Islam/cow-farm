// গরু-সংক্রান্ত হিসাব। React জানে না, তাই আলাদাভাবে পরীক্ষা করা যায়।

// জন্মতারিখ থেকে বয়স: { years: 6, months: 6 }
// তারিখ খালি বা ভুল (বা ভবিষ্যতের) হলে null
export function calculateAge(dateOfBirth, today = new Date()) {
    if (!dateOfBirth) return null;

    const birth = new Date(`${dateOfBirth}T00:00:00`);
    if (Number.isNaN(birth.getTime()) || birth > today) return null;

    // মোট কত মাস পেরিয়েছে
    let months =
        (today.getFullYear() - birth.getFullYear()) * 12 +
        (today.getMonth() - birth.getMonth());

    // এই মাসের জন্মদিন এখনো আসেনি, তাই পূর্ণ মাস হয়নি
    if (today.getDate() < birth.getDate()) months -= 1;

    return { years: Math.floor(months / 12), months: months % 12 };
}

// পরের গরুর আইডি: সবচেয়ে বড় COW-০১২ থাকলে পরেরটা COW-013
export function generateCowId(cows) {
    const highest = cows.reduce((max, cow) => {
        const match = /^COW-(\d+)$/.exec(cow.cowId ?? "");
        return match ? Math.max(max, Number(match[1])) : max;
    }, 0);

    return `COW-${String(highest + 1).padStart(3, "0")}`;
}
