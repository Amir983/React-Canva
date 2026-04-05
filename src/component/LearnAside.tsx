import { NavLink } from "react-router-dom";

const links = [
  { to: "/learn", label: "Quick Start", end: true },
  { to: "/learn/Thinking", label: "Thinking in React" },
  { to: "/learn/Installation", label: "Installation" },
];

const LearnAside = () => {
  return (
    <aside
      style={{
        position:
          "sticky" /* يجعل القائمة ثابتة في مكانها عند التمرير (Scrolling) */,
        top: "80px" /* المسافة التي تتركها القائمة من أعلى الشاشة عند الثبات */,
        background:
          "var(--surface)" /* لون الخلفية مستمد من متغير CSS العام للموقع */,
        border:
          "1px solid var(--border)" /* إطار خارجي خفيف للفصل بين المحتوى */,
        borderRadius: "14px" /* تدوير زوايا الحاوية الجانبية */,
        padding: "20px 16px" /* مسافات داخلية من جميع الجهات */,
      }}
    >
      <p
        style={{
          fontSize: "11px" /* حجم خط صغير جداً للعنوان الجانبي */,
          fontWeight: 600 /* خط سميك لتمييز العنوان */,
          textTransform: "uppercase" /* تحويل الحروف للإنجليزية الكبيرة */,
          letterSpacing:
            "0.1em" /* تباعد إضافي بين الحروف ليعطي طابع التوثيق الرسمي */,
          color: "var(--text-muted)" /* لون نص رمادي باهت قليلاً */,
          padding: "0 10px" /* مسافة يمين ويسار النص */,
          marginBottom: "12px" /* مسافة أسفل العنوان قبل بدء الروابط */,
        }}
      >
        Learn
      </p>
      <nav>
        <ul
          style={{
            listStyle: "none" /* إزالة النقاط (Bullets) الافتراضية للقائمة */,
            display: "flex" /* تفعيل نظام الـ Flexbox */,
            flexDirection: "column" /* ترتيب الروابط بشكل رأسي (تحت بعضها) */,
            gap: "2px" /* مسافة بسيطة جداً بين كل رابط والآخر */,
          }}
        >
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                /* التنسيق أدناه يعتمد على حالة الرابط (نشط أم لا) */
                style={({ isActive }) => ({
                  display:
                    "block" /* جعل الرابط يأخذ العرض الكامل للضغط بسهولة */,
                  padding: "8px 10px" /* مساحة داخلية للرابط */,
                  borderRadius: "8px" /* تدوير حواف خلفية الرابط عند التحديد */,
                  fontSize: "15px" /* حجم خط الروابط */,
                  fontWeight: isActive
                    ? 600
                    : 300 /* تغليظ الخط فقط إذا كان الرابط نشطاً */,
                  textDecoration: "none" /* إزالة الخط الافتراضي تحت الروابط */,

                  /* تغيير لون النص: ملون إذا كان نشطاً، وباهت إذا لم يكن */
                  color: isActive ? "var(--accent)" : "var(--text-dim)",

                  /* تغيير لون الخلفية: لون خفيف جداً خلف الرابط المختار فقط */
                  background: isActive ? "var(--accent-soft)" : "transparent",

                  /* إضافة خط عمودي على يسار الرابط المختار لتمييزه */
                  borderLeft: isActive
                    ? "2px solid var(--accent)"
                    : "2px solid transparent",

                  /* جعل انتقال الألوان والحدود ناعماً (Animation) */
                  transition: "all 0.3s ease",
                })}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default LearnAside;
