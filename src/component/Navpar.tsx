import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navpar = () => {
  // state عشان نتحكم في الـ Mobile Menu (مفتوح/مقفول)
  const [menuOpen, setMenuOpen] = useState(false);

  // بيانات الروابط في array عشان منكررش كود الـ NavLink
  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/page", label: "Pages" },
    { to: "/about", label: "About" },
    { to: "/Learn", label: "Learn" },
    { to: "/Login", label: "Login" },
    { to: "/Contribute", label: "Contribute" },
  ];

  return (
    // sticky top-0 → يفضل ثابت فوق وأنت بتعمل Scroll
    // z-50 → عشان يظهر فوق أي محتوى تاني
    // backdrop-blur-md → تأثير التغبيش الزجاجي (Glassmorphism)
    // border-b → خط رفيع بيفصل الهيدر عن الصفحة
    <header
      className="sticky top-0 z-50 border-b border-border"
      style={{
        background: "rgba(13,13,15,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <nav
        // max-w-5xl mx-auto → سنتر الـ Navbar في نص الشاشة
        // px-4 md:px-6 → padding جانبي أصغر على الموبيل
        // h-[60px] → طول ثابت للهيدر
        // flex items-center justify-between → الشعار في طرف واللينكات في الطرف التاني
        className="max-w-5xl mx-auto px-4 md:px-6 h-[60px] flex items-center justify-between"
      >
        {/* اللوجو */}
        {/* select-none → عشان محدش يقدر يحدد النص */}
        <span
          className="text-xl select-none tracking-tight text-white"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          react
          <span style={{ color: "var(--accent)" }}>docs</span>
        </span>

        {/* روابط الديسكتوب */}
        {/* hidden md:flex → بتختفي على الموبيل وتظهر على الديسكتوب */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                // isActive → لو اللينك هو اللي مفتوح بنغير لونه وخلفيته
                className={({ isActive }) =>
                  `inline-block px-4 py-1.5 rounded-xl text-sm font-semibold no-underline transition-all
                  ${
                    isActive
                      ? "text-accent bg-accent/10" // اللينك الـ Active
                      : "text-text-dim hover:text-white" // اللينكات العادية
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* زرار الـ Hamburger Menu على الموبيل بس */}
        {/* md:hidden → بيختفي على الديسكتوب */}
        <button
          className="md:hidden text-white text-2xl p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* لو مفتوح يعرض X، لو مقفول يعرض الـ hamburger */}
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* الـ Mobile Menu */}
      {/* md:hidden → موجود على الموبيل بس */}
      {/* بيظهر ويختفي بناءً على الـ menuOpen state */}
      {menuOpen && (
        <div className="md:hidden border-t border-border px-4 py-3 flex flex-col gap-1">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              // لما المستخدم يضغط على لينك الـ Menu بيقفل أوتوماتيك
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl text-sm font-semibold no-underline transition-all
                ${
                  isActive
                    ? "text-accent bg-accent/10"
                    : "text-text-dim hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navpar;
