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
            "Total Cows and Grass Land now come from your real data. The other numbers and charts are still demo data and will become real once their modules are built.",
        totalCows: "Total Cows",
        todayMilk: "Today's Milk",
        todaySales: "Today's Sales",
        todayExpense: "Today's Expense",
        availableFeed: "Available Feed",
        availableLand: "Grass Land",
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
        inHerd: "In the herd",
        totalRecords: "Total records",
        searchPlaceholder: "Search by name or ID",
        filters: {
            sortBy: "Sort by",
            clear: "Clear filters",
        },
        sort: {
            default: "Order added",
            ageOldest: "Age: oldest first",
            ageYoungest: "Age: youngest first",
            milkHigh: "Milk: high to low",
            milkLow: "Milk: low to high",
            name: "Name (A–Z)",
        },
        noResults: {
            title: "No cows found",
            description: "Try changing your search or filters.",
        },
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
        landIdRequired: "Land ID is required.",
        landIdDuplicate: "This ID already exists. Please use a different one.",
        locationRequired: "Land location is required.",
        areaRequired: "Land area is required.",
        areaPositive: "Area must be greater than 0.",
        harvestBeforePlanting:
            "Harvest date cannot be before the planting date.",
        costNegative: "Cost cannot be negative.",
    },

    lands: {
        totalArea: "Total land",
        grassArea: "Grass land",
        add: "Add Land",
        addTitle: "Add New Land",
        editTitle: "Edit Land",
        searchPlaceholder: "Search by ID, location or crop",
        columns: {
            landId: "Land ID",
            location: "Location",
            area: "Area",
            soil: "Soil",
            crop: "Crop / Grass",
            harvestDate: "Harvest Date",
            status: "Status",
        },
        form: {
            landId: "Land ID",
            location: "Location",
            area: "Area",
            unit: "Unit",
            soilType: "Soil Type",
            currentCrop: "Current Crop",
            grassType: "Grass Type",
            plantingDate: "Planting Date",
            expectedHarvestDate: "Expected Harvest Date",
            harvestQuantity: "Harvest Quantity (KG)",
            cost: "Cost (৳)",
            status: "Status",
        },
        filters: {
            sortBy: "Sort by",
            clear: "Clear filters",
        },
        sort: {
            default: "Order added",
            areaLarge: "Area: large to small",
            areaSmall: "Area: small to large",
            harvestSoon: "Harvest date: soonest first",
        },
        messages: {
            added: "Land added successfully.",
            updated: "Land updated successfully.",
            deleted: "Land deleted successfully.",
        },
        delete: {
            title: "Delete this land?",
            message:
                '"{landId}" ({location}) will be permanently removed and this cannot be undone.',
        },
        empty: {
            title: "No land yet",
            description: "Land you add will appear here.",
        },
        noResults: {
            title: "No land found",
            description: "Try changing your search or filters.",
        },
    },

    landUnit: {
        acre: "Acre",
        decimal: "Decimal",
        bigha: "Bigha",
        hectare: "Hectare",
    },

    landStatus: {
        fallow: "Fallow",
        preparing: "Preparing",
        growing: "Growing",
        harvested: "Harvested",
    },

    soilType: {
        loam: "Loam",
        clay: "Clay",
        sandy: "Sandy",
        silt: "Silt",
        other: "Other",
    },

    grassType: {
        none: "None",
        napier: "Napier",
        para: "Para",
        german: "German",
        maize: "Maize",
        sorghum: "Sorghum",
        other: "Other",
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
        all: "All",
        clearSearch: "Clear search",
    },

    pagination: {
        label: "Pagination",
        showing: "Showing {from}–{to} of {total}",
        previous: "Previous page",
        next: "Next page",
        page: "Page {page}",
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
