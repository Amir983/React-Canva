import { useState } from "react";
import { Outlet } from "react-router-dom";
import LearnAside from "../../component/LearnAside";
import Navpar from "../../component/Navpar";

const Layout1 = () => {
  // state عشان نتحكم في الـ Sidebar على الموبيل (true = مفتوح / false = مقفول)
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    // min-h-screen → الصفحة تاخد ارتفاع الشاشة كلها
    // bg-bg → لون الخلفية الأساسي
    <div className="min-h-screen bg-bg">
      {/* الـ Navbar الثابت في الأعلى */}
      <Navpar />

      {/* زرار فتح الـ Sidebar على الموبيل بس */}
      {/* md:hidden → بيختفي تماماً على شاشات أكبر من 768px */}
      {/* fixed bottom-6 right-6 → ثابت في أسفل يمين الشاشة */}
      {/* z-50 → فوق كل العناصر التانية */}
      <button
        className="md:hidden fixed bottom-6 right-6 z-50 bg-accent text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-xl"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {/* لو مفتوح يعرض X، لو مقفول يعرض الـ hamburger menu */}
        {sidebarOpen ? "✕" : "☰"}
      </button>

      {/* الـ Overlay: خلفية سوداء شفافة لما الـ Sidebar مفتوح */}
      {/* لما المستخدم يضغط عليها الـ Sidebar بيقفل */}
      {/* md:hidden → مش موجودة خالص على الديسكتوب */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* الحاوية الرئيسية */}
      {/* px-4 py-8 → padding على الموبيل */}
      {/* md:grid md:grid-cols-[220px_1fr] → على الديسكتوب بس يبقى grid عمودين */}
      {/* md:gap-12 → مسافة بين الـ Sidebar والمحتوى على الديسكتوب */}
      {/* md:items-start → العناصر تبدأ من فوق */}
      <div className="max-w-5xl mx-auto px-4 py-8 md:grid md:grid-cols-[220px_1fr] md:gap-12 md:items-start">
        {/* الـ Sidebar */}
        {/* على الموبيل: fixed من الشمال، بيتحرك للداخل والخارج بـ translate */}
        {/* translate-x-0 → ظاهر / -translate-x-full → مخبي برا الشاشة */}
        {/* transition-transform duration-300 → أنيميشن سلسة عند الفتح والقفل */}
        {/* على الديسكتوب (md:) → static يعني في مكانه الطبيعي في الـ grid */}
        <aside
          className={`
            fixed top-0 left-0 h-full w-64 bg-bg z-40 p-6 transition-transform duration-300
            md:static md:h-auto md:w-auto md:p-0 md:translate-x-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <LearnAside />
        </aside>

        {/* المحتوى الرئيسي */}
        {/* page-enter → أنيميشن دخول الصفحة */}
        {/* min-w-0 → مهم جداً في الـ grid عشان المحتوى ميفردش برا الـ grid cell */}
        <main className="page-enter min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout1;
