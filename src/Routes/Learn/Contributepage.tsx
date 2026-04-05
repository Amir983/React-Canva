import { useLocation } from "react-router-dom";
import Button from "../../component/UI/Button";
import Textarea from "../../component/UI/Textarea";

const Contributepage = () => {
  const { state } = useLocation();
  return (
    // max-w-md → أقصى عرض 500px تقريباً عشان الكارت ميفردش
    // mx-auto → سنتر أفقي
    // pt-8 → padding من فوق عشان الكارت ينزل شوية
    <div className=" max-w-md mx-auto pt-8 px-4">
      {/* الكارت: خلفية غامقة وحدود وحواف دائرية */}
      <div className="bg-surface border-2 border-border rounded-2xl p-9">
        {/* رأس الكارت */}
        <div className="mb-7">
          {/* الـ Badge: بيعرض نوع المشكلة والإيميل */}
          {/* font-mono → خط برمجي */}
          {/* bg-red-500/10 → أحمر شفاف جداً للخلفية */}
          {/* border-red-500/20 → حدود حمراء شفافة */}
          <span className="inline-block bg-red-500/10 text-red-400 border-2 border-red-500/20 rounded-xl px-3 py-1 text-xs font-semibold font-mono mb-3">
            issue: bug-report:Email: {state.email}
          </span>

          {/* العنوان الرئيسي */}
          <h2 className="text-xl font-bold mb-2 text-white">Report an issue</h2>

          {/* نص توضيحي بلون أفتح (muted) */}
          <p className="text-slate-400 text-sm leading-relaxed">
            Describe the bug clearly so we can fix it fast.
          </p>
        </div>

        {/* منطقة المدخلات */}
        {/* flex flex-col gap-4 → عناصر تحت بعض بمسافة بينهم */}
        <div className="flex flex-col gap-4">
          <Textarea style={{ color: "black" }} />
          <Button style={{ background: "var(--accent)" }}>Submit issue</Button>
        </div>
      </div>
    </div>
  );
};

export default Contributepage;
