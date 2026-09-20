import { Routes, Route } from "react-router-dom";
import { PATHS } from "../constants/paths";
import MainLayout from "../components/layout/MainLayout";

import DashboardPage from "../pages/DashboardPage";
import CowsPage from "../pages/CowsPage";
import LandPage from "../pages/LandPage";
import GrassPage from "../pages/GrassPage";
import FeedPage from "../pages/FeedPage";
import MilkPage from "../pages/MilkPage";
import MilkSalesPage from "../pages/MilkSalesPage";
import CowSalesPage from "../pages/CowSalesPage";
import IncomePage from "../pages/IncomePage";
import ExpensesPage from "../pages/ExpensesPage";
import ProfitLossPage from "../pages/ProfitLossPage";
import ReportsPage from "../pages/ReportsPage";
import SettingsPage from "../pages/SettingsPage";
import NotFoundPage from "../pages/NotFoundPage";

function AppRoutes() {
    return (
        <Routes>
            {/* MainLayout সব page-কে ঘিরে রাখে (Sidebar + Navbar সবসময় থাকে) */}
            <Route element={<MainLayout />}>
                <Route index element={<DashboardPage />} />

                <Route path={PATHS.cows} element={<CowsPage />} />
                <Route path={PATHS.land} element={<LandPage />} />
                <Route path={PATHS.grass} element={<GrassPage />} />
                <Route path={PATHS.feed} element={<FeedPage />} />

                <Route path={PATHS.milk} element={<MilkPage />} />

                <Route path={PATHS.milkSales} element={<MilkSalesPage />} />
                <Route path={PATHS.cowSales} element={<CowSalesPage />} />

                <Route path={PATHS.income} element={<IncomePage />} />
                <Route path={PATHS.expenses} element={<ExpensesPage />} />
                <Route path={PATHS.profitLoss} element={<ProfitLossPage />} />

                <Route path={PATHS.reports} element={<ReportsPage />} />
                <Route path={PATHS.settings} element={<SettingsPage />} />

                {/* উপরের কোনোটির সাথে না মিললে */}
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
