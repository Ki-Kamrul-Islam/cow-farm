import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function MainLayout() {
    return (
        <div className="min-h-screen bg-background">
            {/* Desktop Sidebar: ১০২৪px+ screen-এ বাঁয়ে স্থির */}
            <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-line bg-surface lg:block">
                <Sidebar />
            </aside>

            {/* বাকি অংশ: Desktop-এ Sidebar-এর জায়গা (w-64) ছেড়ে দাঁড়ায় */}
            <div className="lg:pl-64">
                <Navbar />

                <main className="p-4 sm:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default MainLayout;
