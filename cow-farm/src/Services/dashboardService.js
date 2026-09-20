import { DASHBOARD_DEMO_SUMMARY } from "../data/dashboardDemo";

// Dashboard-এর সারসংক্ষেপ আনার একমাত্র জায়গা।
// পরে এখানে গরু/দুধ/বিক্রির service থেকে হিসাব করে আসল সংখ্যা ফেরত দেব।
// Page বা card-এর code তখন একটুও বদলাতে হবে না।
export const dashboardService = {
    getSummary() {
        return DASHBOARD_DEMO_SUMMARY;
    },
};
