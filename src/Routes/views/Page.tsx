const Page = () => {
  return (
    // min-h-[70vh] → الصفحة تاخد على الأقل 70% من ارتفاع الشاشة
    // flex flex-col items-center justify-center → سنتر المحتوى أفقي ورأسي
    // relative overflow-hidden → عشان الـ absolute elements جوه ميطلعوش برا
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center gap-6 relative overflow-hidden">
      {/* الـ Background Glow: دايرة ضوء خلف المحتوى */}
      {/* pointer-events-none → عشان ميأثرش على الكليك */}
      {/* -translate-x-1/2 -translate-y-1/2 → سنتر الدايرة في المنتصف */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(124,111,255,0.08) 0%, transparent 70%)",
        }}
      />

      {/* الـ Grid Lines: خطوط زخرفية في الخلفية */}
      {/* inset-0 → بيغطي الحاوية كلها */}
      {/* maskImage → بيخلي الخطوط تختفي في الأطراف */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* المحتوى الرئيسي */}
      {/* z-10 → عشان يكون فوق الـ background elements */}
      <div className="relative z-10">
        {/* الـ Badge */}
        {/* rounded-full → شكل بيضاوي كامل */}
        {/* font-mono → خط برمجي */}
        <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 text-xs text-slate-400 font-mono mb-8 tracking-widest">
          {/* النقطة المضيئة */}
          <span
            className="w-1.5 h-1.5 rounded-full bg-accent inline-block"
            style={{ boxShadow: "0 0 6px var(--accent-glow)" }}
          />
          /page
        </div>

        {/* العنوان الرئيسي */}
        {/* clamp → حجم الخط بيتغير مع حجم الشاشة */}
        {/* tracking-tight → حروف متقاربة */}
        {/* leading-none → تباعد سطور ضيق */}
        <h1
          className="text-white tracking-tight leading-none mb-5"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Nothing here {/* text-accent italic → لون الـ accent مع italic */}
          <span className="text-[#7b6fffd1] italic">yet.</span>
        </h1>

        {/* النص التوضيحي */}
        {/* max-w-sm → عرض محدود عشان النص ميفردش */}
        <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed mb-10">
          هذه الصفحة لسه فاضية — ممكن تحط فيها أي محتوى عايزه.
        </p>

        {/* زرار الرجوع */}
        {/* hover:border-accent hover:text-white → بيتغير عند الهوفر */}
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-surface border border-border hover:border-accent text-text-dim hover:text-white rounded-xl text-sm font-medium no-underline transition-all"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default Page;
