interface Iprops {
  statuscode?: number;
  title?: string;
}

const ErrorElement = ({ statuscode = 500, title = "Server Error" }: Iprops) => {
  // بنحدد كلاسات اللون بناءً على الـ status code
  // كل status code ليه لون مختلف عشان المستخدم يفهم نوع الخطأ على طول
  const getStatusColor = () => {
    if (statuscode >= 500)
      return "text-red-400 bg-red-500/10 border-red-500/20"; // أحمر → Server Error
    if (statuscode === 404)
      return "text-orange-400 bg-orange-500/10 border-orange-500/20"; // برتقالي → Not Found
    if (statuscode === 401)
      return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"; // أصفر → Unauthorized
    if (statuscode === 200)
      return "text-green-400 bg-green-500/10 border-green-500/20"; // أخضر → OK
    return "text-slate-400 bg-slate-500/10 border-slate-500/20"; // رمادي → default
  };

  // نفس المنطق بس للزرار بس
  // /10 و /20 دي opacity → يعني نفس اللون بس شفاف
  const getBtnColor = () => {
    if (statuscode >= 500) return "bg-red-400 hover:bg-red-300";
    if (statuscode === 404) return "bg-orange-400 hover:bg-orange-300";
    if (statuscode === 401) return "bg-yellow-400 hover:bg-yellow-300";
    if (statuscode === 200) return "bg-green-400 hover:bg-green-300";
    return "bg-slate-400 hover:bg-slate-300";
  };

  return (
    // flex flex-col items-center justify-center → بيسنتر المحتوى أفقي ورأسي
    // min-h-[60vh] → الحاوية تاخد على الأقل 60% من ارتفاع الشاشة
    // p-8 → padding من كل الاتجاهات
    <div className="fixed inset-0 flex flex-col items-center justify-center min-h-[60vh] p-8">
      {/* rounded-2xl → حواف دائرية كبيرة (مودرن) */}
      {/* p-12 → padding داخلي واسع عشان العناصر تتنفس */}
      {/* max-w-md → أقصى عرض للكارت عشان ميفردش على الشاشات الكبيرة */}
      <div className="bg-surface border-2 border-border rounded-2xl p-12 text-center max-w-md w-full">
        {/* font-mono → خط برمجي يدي إحساس تقني */}
        {/* tracking-wide → مسافات بين الحروف أكبر شوية */}
        {/* getStatusColor() → بترجع كلاسات اللون المناسبة للـ status code */}
        <span
          className={`inline-block border-2 rounded-xl px-4 py-1 text-sm font-bold font-mono tracking-wide mb-6 ${getStatusColor()}`}
        >
          {statuscode}
        </span>

        {/* text-2xl font-bold → عنوان كبير وبولد */}
        {/* text-white → لون النص أبيض عشان يظهر على الخلفية الغامقة */}
        <h2 className="text-2xl font-bold mb-3 text-white">{title}</h2>

        {/* text-slate-400 → لون رمادي فاتح (muted) عشان يكون أقل أهمية من العنوان */}
        {/* leading-relaxed → تباعد بين السطور مريح للقراءة */}
        <p className="text-slate-400 text-sm leading-relaxed">
          Something went wrong. Please try again later.
        </p>

        {/* h-px → ارتفاع 1px فقط عشان يعمل خط فاصل رفيع */}
        {/* my-7 → margin أعلى وتحت عشان الخط ياخد مساحة */}
        <div className="h-px bg-border my-7" />

        {/* transition-colors duration-200 → أنيميشن سلسة عند الهوفر */}
        {/* text-slate-900 → نص غامق عشان يظهر على الألوان الفاتحة */}
        {/* getBtnColor() → بترجع لون الزرار المناسب */}
        <a
          href="/"
          className={`inline-block rounded-xl px-7 py-2.5 font-semibold text-sm text-slate-900 transition-colors duration-200 ${getBtnColor()}`}
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default ErrorElement;
