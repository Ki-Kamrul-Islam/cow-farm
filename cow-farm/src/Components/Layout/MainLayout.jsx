import { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MobileDrawer from "./MobileDrawer";
import { useLanguage } from "../../hooks/useLanguage";

function MainLayout() {
    const { t } = useLanguage();

    // 🧠 Drawer খোলা কি বন্ধ, এই state এখানেই থাকে
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

    return (
        <div className="min-h-screen bg-background">
            {/* Desktop Sidebar: ১০২৪px+ screen-এ বাঁয়ে স্থির */}
            <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-line bg-surface lg:block">
                <Sidebar />
            </aside>

            {/* বাকি অংশ: Desktop-এ Sidebar-এর জায়গা (w-64) ছেড়ে দাঁড়ায় */}
            <div className="lg:pl-64">
                <Navbar onMenuClick={openDrawer} />

                <main className="p-4 sm:p-6">
                    <Outlet />
                </main>
            </div>

            {/* Mobile Drawer: ছোট screen-এ ☰ চাপলে আসে */}
            <MobileDrawer
                isOpen={isDrawerOpen}
                onClose={closeDrawer}
                label={t("layout.mobileMenu")}
            >
                <Sidebar onNavigate={closeDrawer} onClose={closeDrawer} />
            </MobileDrawer>
        </div>
    );
}

export default MainLayout;
