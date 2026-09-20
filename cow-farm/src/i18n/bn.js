const bn = {
    app: {
        name: "গরুর খামার ব্যবস্থাপনা",
    },

    nav: {
        dashboard: "ড্যাশবোর্ড",
        farm: "খামার",
        cows: "গরু",
        land: "জমি",
        grass: "ঘাস",
        feed: "খাদ্য",
        production: "উৎপাদন",
        milk: "দুধ",
        sales: "বিক্রয়",
        milkSales: "দুধ বিক্রি",
        cowSales: "গরু বিক্রি",
        finance: "আর্থিক হিসাব",
        income: "আয়",
        expenses: "খরচ",
        profitLoss: "লাভ-ক্ষতি",
        reports: "রিপোর্ট",
        settings: "সেটিংস",
    },

    dashboard: {
        subtitle: "আপনার খামারের সারসংক্ষেপ",
        demoNote:
            "এখন নমুনা (demo) তথ্য দেখানো হচ্ছে। গরু, দুধ ইত্যাদি অংশ তৈরি হলে আসল তথ্য আসবে।",
        totalCows: "মোট গরু",
        todayMilk: "আজকের দুধ",
        todaySales: "আজকের বিক্রি",
        todayExpense: "আজকের খরচ",
        availableFeed: "মজুত খাদ্য",
        availableLand: "ঘাসের জন্য জমি",
        monthlyProfit: "মাসিক লাভ",
    },

    units: {
        liter: "লিটার",
        kg: "কেজি",
        acre: "একর",
        year: "বছর",
        month: "মাস",
    },

    profit: {
        title: "লাভ / ক্ষতি",
        daily: "আজ",
        weekly: "এই সপ্তাহ",
        monthly: "এই মাস",
        yearly: "এই বছর",
        profit: "লাভ",
        loss: "ক্ষতি",
    },

    charts: {
        milkTitle: "দুধ উৎপাদন",
        milkSubtitle: "গত ৭ দিন",
        milkSeries: "দুধ",
        expenseTitle: "খরচের ভাগ",
        expenseSubtitle: "ক্যাটাগরি অনুযায়ী, গত মাস",
        incomeExpenseTitle: "আয় বনাম খরচ",
        incomeExpenseSubtitle: "গত ৬ মাসের তুলনা",
        income: "আয়",
        expense: "খরচ",
        noData: "দেখানোর মতো তথ্য নেই",
    },

    expenseCategory: {
        feed: "খাদ্য",
        labour: "শ্রমিক",
        medicine: "ওষুধ",
        electricity: "বিদ্যুৎ",
        transport: "পরিবহন",
        other: "অন্যান্য",
    },

    cows: {
        demoNote:
            "এখানে নমুনা গরু দেখানো হচ্ছে। গরু যোগ, সম্পাদনা ও মুছে ফেলার সুবিধা পরের ধাপে আসবে।",
        total: "মোট গরু",
        resetDemo: "নমুনা তথ্য আবার লোড করুন",
        columns: {
            cowId: "গরুর আইডি",
            name: "নাম",
            breed: "জাত",
            gender: "লিঙ্গ",
            age: "বয়স",
            weight: "ওজন (কেজি)",
            milk: "দুধ (লিটার/দিন)",
            status: "অবস্থা",
        },
        empty: {
            title: "কোনো গরু নেই",
            description: "গরু যোগ করলে এখানে তালিকা দেখা যাবে।",
        },
    },

    cowStatus: {
        active: "সক্রিয়",
        sold: "বিক্রিত",
        sick: "অসুস্থ",
        pregnant: "গর্ভবতী",
        dead: "মৃত",
        retired: "অবসরপ্রাপ্ত",
    },

    gender: {
        female: "স্ত্রী",
        male: "পুরুষ",
    },

    breed: {
        local: "দেশি",
        redChittagong: "রেড চিটাগং",
        sahiwal: "শাহীওয়াল",
        holsteinFriesian: "হলস্টেইন ফ্রিজিয়ান",
        jersey: "জার্সি",
        sindhi: "সিন্ধি",
        crossbreed: "সংকর",
        other: "অন্যান্য",
    },

    common: {
        comingSoon: "এই অংশটি শীঘ্রই তৈরি করা হবে।",
    },

    layout: {
        openMenu: "মেনু খুলুন",
        closeMenu: "মেনু বন্ধ করুন",
        mobileMenu: "নেভিগেশন মেনু",
    },

    notFound: {
        title: "পেজটি খুঁজে পাওয়া যায়নি",
        message: "আপনি যে ঠিকানায় যেতে চেয়েছেন সেটি সঠিক নয়।",
        backHome: "ড্যাশবোর্ডে ফিরে যান",
    },

    theme: {
        light: "লাইট",
        dark: "ডার্ক",
        switchToLight: "লাইট মোডে যান",
        switchToDark: "ডার্ক মোডে যান",
    },

    language: {
        switch: "ভাষা পরিবর্তন করুন",
    },
};

export default bn;
