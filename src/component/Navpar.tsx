import { NavLink } from "react-router-dom";

const Navpar = () => {
  return (
    <header
      style={{
        position: "sticky", // يفضل ثابت فوق وأنت بتعمل Scroll
        top: 0, // مكانه في أول الصفحة من فوق
        zIndex: 50, // عشان يظهر فوق أي محتوى تاني (الطبقة العلوية)
        background: "rgba(13,13,15,0.85)", // لون أسود شفاف شوية (85%)
        backdropFilter: "blur(12px)", // تأثير التغبيش الزجاجي (Glassmorphism)
        WebkitBackdropFilter: "blur(12px)", // دعم تأثير التغبيش لمتصفحات Safari
        borderBottom: "1px solid var(--border)", // خط رفيع بيفصل الهيدر عن الصفحة
      }}
    >
      <nav
        style={{
          maxWidth: "1100px", // أقصى عرض للمحتوى عشان ميسرحش في الشاشات الواسعة
          margin: "0 auto", // سنترة الـ Navbar في نص الشاشة
          padding: "0 24px", // مسافة أمان (Margin داخلي) من اليمين والشمال
          height: "60px", // طول ثابت للهيدر
          display: "flex", // استخدام نظام الـ Flexbox لتوزيع العناصر
          alignItems: "center", // توسيط العناصر عمودياً
          justifyContent: "space-between", // الشعار في طرف واللينكات في الطرف التاني
        }}
      >
        {/* اللوجو (Logo) */}
        <span
          style={{
            fontFamily: "'DM Serif Display', serif", // نوع الخط الفخم بتاع اللوجو
            fontSize: "1.25rem",
            color: "var(--text)", // لون النص الأساسي من المتغيرات
            letterSpacing: "-0.03em", // تضييق المسافات بين الحروف لشكل احترافي
            userSelect: "none", // عشان محدش يقدر يحدد النص (Text Highlight)
          }}
        >
          react<span style={{ color: "var(--accent)" }}>docs</span>{" "}
          {/* كلمة docs بلون مختلف */}
        </span>

        {/* قائمة الروابط (Links List) */}
        <ul
          style={{
            display: "flex", // رص اللينكات جنب بعض
            alignItems: "center",
            gap: "4px", // مسافة صغيرة بين كل لينك والثاني
            listStyle: "none", // نشيل النقط اللي بتبقى جنب الـ li
          }}
        >
          {/* عملنا Array فيها البيانات عشان منكررش كود الـ NavLink كذا مرة */}
          {[
            { to: "/", label: "Home", end: true },
            { to: "/page", label: "Pages" },
            { to: "/about", label: "About" },
            { to: "/Learn", label: "Learn" },
            { to: "/Login", label: "Login" },
            { to: "/Contribute", label: "Contribute" },
          ].map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end} // لو المسار "/" ميبقاش "Active" إلا لو إحنا في الهوم بالظبط
                style={({ isActive }) => ({
                  display: "inline-block",
                  padding: "6px 14px", // مساحة ضغط مريحة للينك
                  borderRadius: "10px", // حواف ناعمة للخلفية
                  fontSize: "16px",
                  fontWeight: 600,
                  textDecoration: "none", // نشيل الخط اللي تحت اللينك
                  transition: "all 0.3s ease", // حركة ناعمة لما اللون يتغير

                  /* هنا السحر: لو اللينك هو اللي مفتوح (isActive) بنغير لونه وخلفيته */
                  color: isActive ? "var(--accent)" : "var(--text-dim)",
                  background: isActive ? "var(--accent-soft)" : "transparent",
                })}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navpar;
