import { Outlet } from "react-router-dom";
import LearnAside from "../../component/LearnAside";
import Navpar from "../../component/Navpar";

const Layout1 = () => {
  return (
    // min-h-screen → الصفحة تاخد على الأقل ارتفاع الشاشة كلها
    // bg-bg → لون الخلفية الأساسي للتطبيق
    <div className="min-h-screen bg-bg">
      {/* الـ Navbar الثابت في الأعلى */}
      <Navpar />

      {/* الحاوية الرئيسية */}
      {/* max-w-5xl → أقصى عرض 1100px تقريباً */}
      {/* mx-auto → سنتر أفقي */}
      {/* px-6 py-12 → padding من الجوانب والأعلى والأسفل */}
      {/* grid grid-cols-[220px_1fr] → عمودين: الأول 220px للـ Aside والتاني يملا الباقي */}
      {/* gap-12 → مسافة بين الـ Aside والـ main */}
      {/* items-start → العناصر تبدأ من فوق مش متسنترة رأسياً */}
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-[220px_1fr] gap-12 items-start">
        {/* الـ Sidebar: القائمة الجانبية */}
        <LearnAside />

        {/* المحتوى الرئيسي: بيتغير مع كل route */}
        {/* page-enter → كلاس انيميشن عندك في الـ CSS */}
        <main className="page-enter">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout1;
