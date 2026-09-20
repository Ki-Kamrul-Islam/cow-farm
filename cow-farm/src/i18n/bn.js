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
            "মোট গরুর সংখ্যা এখন আসল তথ্য থেকে আসছে। বাকি সংখ্যা ও chart এখনো নমুনা (demo), সংশ্লিষ্ট অংশ তৈরি হলে আসল তথ্য আসবে।",
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
        total: "মোট গরু",
        inHerd: "খামারে আছে",
        totalRecords: "মোট রেকর্ড",
        searchPlaceholder: "নাম বা আইডি দিয়ে খুঁজুন",
        filters: {
            sortBy: "সাজান",
            clear: "ফিল্টার মুছুন",
        },
        sort: {
            default: "যোগ করার ক্রম",
            ageOldest: "বয়স: বেশি থেকে কম",
            ageYoungest: "বয়স: কম থেকে বেশি",
            milkHigh: "দুধ: বেশি থেকে কম",
            milkLow: "দুধ: কম থেকে বেশি",
            name: "নাম (বর্ণানুক্রম)",
        },
        noResults: {
            title: "কোনো গরু পাওয়া যায়নি",
            description: "অনুসন্ধান বা ফিল্টার বদলে আবার চেষ্টা করুন।",
        },
        add: "গরু যোগ করুন",
        addTitle: "নতুন গরু যোগ করুন",
        editTitle: "গরুর তথ্য সম্পাদনা",
        form: {
            cowId: "গরুর আইডি",
            name: "নাম",
            breed: "জাত",
            gender: "লিঙ্গ",
            dateOfBirth: "জন্মতারিখ",
            color: "রং",
            weight: "ওজন (কেজি)",
            milkProduction: "দুধ (লিটার/দিন)",
            purchaseDate: "কেনার তারিখ",
            purchasePrice: "কেনার দাম (৳)",
            status: "অবস্থা",
            healthStatus: "স্বাস্থ্যের অবস্থা",
            lastVaccinationDate: "সর্বশেষ টিকার তারিখ",
            pregnancyStatus: "গর্ভাবস্থা",
            expectedDeliveryDate: "সম্ভাব্য প্রসবের তারিখ",
            notes: "নোট",
        },
        messages: {
            added: "গরুটি সফলভাবে যোগ করা হয়েছে।",
            updated: "গরুর তথ্য সফলভাবে আপডেট করা হয়েছে।",
            deleted: "গরুটি মুছে ফেলা হয়েছে।",
        },
        delete: {
            title: "গরুটি মুছে ফেলবেন?",
            message:
                '"{name}" ({cowId}) স্থায়ীভাবে মুছে যাবে, এটি আর ফেরানো যাবে না। বিক্রি বা মৃত্যু হলে মুছে না ফেলে "অবস্থা" বদলে দেওয়াই ভালো।',
        },
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

    healthStatus: {
        healthy: "সুস্থ",
        sick: "অসুস্থ",
        recovering: "সেরে উঠছে",
    },

    pregnancyStatus: {
        notPregnant: "গর্ভবতী নয়",
        pregnant: "গর্ভবতী",
        notApplicable: "প্রযোজ্য নয়",
    },

    validation: {
        cowIdRequired: "গরুর আইডি দিতে হবে।",
        cowIdDuplicate: "এই আইডি আগে থেকেই আছে। অন্য আইডি দিন।",
        nameRequired: "গরুর নাম দিতে হবে।",
        dateFuture: "ভবিষ্যতের তারিখ দেওয়া যাবে না।",
        purchaseBeforeBirth: "কেনার তারিখ জন্মতারিখের আগে হতে পারে না।",
        invalidNumber: "সঠিক সংখ্যা লিখুন।",
        negative: "মান ঋণাত্মক হতে পারবে না।",
        priceNegative: "দাম ঋণাত্মক হতে পারবে না।",
        malePregnant: "পুরুষ গরু গর্ভবতী হতে পারে না।",
    },

    common: {
        comingSoon: "এই অংশটি শীঘ্রই তৈরি করা হবে।",
        actions: "কাজ",
        add: "যোগ করুন",
        edit: "সম্পাদনা",
        delete: "মুছুন",
        save: "সংরক্ষণ করুন",
        cancel: "বাতিল",
        close: "বন্ধ করুন",
        all: "সব",
        clearSearch: "অনুসন্ধান মুছুন",
    },

    pagination: {
        label: "পাতা পরিবর্তন",
        showing: "দেখানো হচ্ছে {from}–{to}, মোট {total}",
        previous: "আগের পাতা",
        next: "পরের পাতা",
        page: "পাতা {page}",
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
