import { Outlet } from "react-router-dom";
import Navpar from "../../component/Navpar";

const Layout = () => {
  return (
    // min-h-screen → الصفحة تاخد ارتفاع الشاشة كلها
    <div className="min-h-screen bg-bg">
      {/* الـ Navbar الثابت في الأعلى */}
      <Navpar />

      {/* الحاوية الرئيسية */}
      {/* px-4 → padding جانبي على الموبيل عشان المحتوى ميلصقش في الحافة */}
      {/* max-w-5xl mx-auto → سنتر على الشاشات الكبيرة */}
      {/* py-8 → padding فوق وتحت */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
