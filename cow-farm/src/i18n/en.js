const en = {
    app: {
        name: "Cow Farm Management",
    },

    nav: {
        dashboard: "Dashboard",
        farm: "Farm",
        cows: "Cows",
        land: "Land",
        grass: "Grass",
        feed: "Feed",
        production: "Production",
        milk: "Milk",
        sales: "Sales",
        milkSales: "Milk Sales",
        cowSales: "Cow Sales",
        finance: "Finance",
        income: "Income",
        expenses: "Expenses",
        profitLoss: "Profit & Loss",
        reports: "Reports",
        settings: "Settings",
    },

    dashboard: {
        subtitle: "Overview of your farm",
        demoNote:
            "Showing demo data for now. Real numbers will appear once the Cow, Milk and other modules are built.",
        totalCows: "Total Cows",
        todayMilk: "Today's Milk",
        todaySales: "Today's Sales",
        todayExpense: "Today's Expense",
        availableFeed: "Available Feed",
        availableLand: "Available Grass Land",
        monthlyProfit: "Monthly Profit",
    },

    units: {
        liter: "L",
        kg: "KG",
        acre: "Acre",
        year: "yr",
        month: "mo",
    },

    profit: {
        title: "Profit / Loss",
        daily: "Today",
        weekly: "This Week",
        monthly: "This Month",
        yearly: "This Year",
        profit: "Profit",
        loss: "Loss",
    },

    charts: {
        milkTitle: "Milk Production",
        milkSubtitle: "Last 7 days",
        milkSeries: "Milk",
        expenseTitle: "Expense Breakdown",
        expenseSubtitle: "By category, last month",
        incomeExpenseTitle: "Income vs Expense",
        incomeExpenseSubtitle: "Last 6 months comparison",
        income: "Income",
        expense: "Expense",
        noData: "No data to show",
    },

    expenseCategory: {
        feed: "Feed",
        labour: "Labour",
        medicine: "Medicine",
        electricity: "Electricity",
        transport: "Transport",
        other: "Other",
    },

    cows: {
        total: "Total cows",
        add: "Add Cow",
        addTitle: "Add New Cow",
        editTitle: "Edit Cow",
        form: {
            cowId: "Cow ID",
            name: "Name",
            breed: "Breed",
            gender: "Gender",
            dateOfBirth: "Date of Birth",
            color: "Color",
            weight: "Weight (KG)",
            milkProduction: "Milk (L/day)",
            purchaseDate: "Purchase Date",
            purchasePrice: "Purchase Price (৳)",
            status: "Status",
            healthStatus: "Health Status",
            lastVaccinationDate: "Last Vaccination Date",
            pregnancyStatus: "Pregnancy Status",
            expectedDeliveryDate: "Expected Delivery Date",
            notes: "Notes",
        },
        messages: {
            added: "Cow added successfully.",
            updated: "Cow updated successfully.",
            deleted: "Cow deleted successfully.",
        },
        delete: {
            title: "Delete this cow?",
            message:
                '"{name}" ({cowId}) will be permanently removed and this cannot be undone. If the cow was sold or died, it is better to change its Status instead of deleting.',
        },
        columns: {
            cowId: "Cow ID",
            name: "Name",
            breed: "Breed",
            gender: "Gender",
            age: "Age",
            weight: "Weight (KG)",
            milk: "Milk (L/day)",
            status: "Status",
        },
        empty: {
            title: "No cows yet",
            description: "Cows you add will appear here.",
        },
    },

    cowStatus: {
        active: "Active",
        sold: "Sold",
        sick: "Sick",
        pregnant: "Pregnant",
        dead: "Dead",
        retired: "Retired",
    },

    gender: {
        female: "Female",
        male: "Male",
    },

    breed: {
        local: "Local (Deshi)",
        redChittagong: "Red Chittagong",
        sahiwal: "Sahiwal",
        holsteinFriesian: "Holstein Friesian",
        jersey: "Jersey",
        sindhi: "Sindhi",
        crossbreed: "Crossbreed",
        other: "Other",
    },

    healthStatus: {
        healthy: "Healthy",
        sick: "Sick",
        recovering: "Recovering",
    },

    pregnancyStatus: {
        notPregnant: "Not pregnant",
        pregnant: "Pregnant",
        notApplicable: "Not applicable",
    },

    validation: {
        cowIdRequired: "Cow ID is required.",
        cowIdDuplicate: "This ID already exists. Please use a different one.",
        nameRequired: "Cow name is required.",
        dateFuture: "Future dates are not allowed.",
        purchaseBeforeBirth:
            "Purchase date cannot be before the date of birth.",
        invalidNumber: "Please enter a valid number.",
        negative: "Value cannot be negative.",
        priceNegative: "Price cannot be negative.",
        malePregnant: "A male cow cannot be pregnant.",
    },

    common: {
        comingSoon: "This section will be built soon.",
        actions: "Actions",
        add: "Add",
        edit: "Edit",
        delete: "Delete",
        save: "Save",
        cancel: "Cancel",
        close: "Close",
    },

    layout: {
        openMenu: "Open menu",
        closeMenu: "Close menu",
        mobileMenu: "Navigation menu",
    },

    notFound: {
        title: "Page not found",
        message: "The address you tried to visit is not correct.",
        backHome: "Back to Dashboard",
    },

    theme: {
        light: "Light",
        dark: "Dark",
        switchToLight: "Switch to light mode",
        switchToDark: "Switch to dark mode",
    },

    language: {
        switch: "Change language",
    },
};

export default en;
