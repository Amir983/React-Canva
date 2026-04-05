const Installation = () => {
  return (
    // max-w-2xl → أقصى عرض 680px تقريباً عشان النص ميفردش
    // page-enter → أنيميشن دخول الصفحة
    <div className="max-w-2xl page-enter">
      {/* الـ Label الصغير فوق العنوان */}
      {/* uppercase tracking-widest → حروف كبيرة ومتباعدة */}
      {/* text-accent → لون الـ accent بتاع التطبيق */}
      <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
        Installation
      </p>

      {/* العنوان الرئيسي */}
      <h1 className="text-3xl font-bold text-white mb-5">Installation</h1>

      {/* النص التوضيحي */}
      {/* leading-relaxed → تباعد بين السطور مريح */}
      {/* text-dim → لون أفتح من الأساسي */}
      <p className="text-text-dim leading-relaxed text-base mb-8">
        React has been designed from the start for gradual adoption, and you can
        use as little or as much React as you need.
      </p>

      {/* الـ Code Block */}
      {/* overflow-hidden → عشان الـ border radius يأثر على الأطراف */}
      <div className="bg-surface border border-border rounded-xl overflow-hidden mb-6">
        {/* هيدر الـ Terminal */}
        {/* border-b → خط فاصل تحت الهيدر */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
          {/* اسم الـ terminal */}
          <span className="text-xs text-slate-400 font-mono">terminal</span>

          {/* النقط الملونة زي macOS */}
          <div className="flex gap-1.5">
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <div
                key={c}
                style={{ background: c }}
                className="w-2.5 h-2.5 rounded-full"
              />
            ))}
          </div>
        </div>

        {/* الكود نفسه */}
        {/* font-mono → خط برمجي */}
        {/* overflow-x-auto → سكرول أفقي لو الكود طويل */}
        <pre className="p-5 text-sm text-green-400 leading-relaxed overflow-x-auto bg-transparent">
          <span className="text-slate-500">$ </span>npm create vite@latest
          my-app{"\n"}
          <span className="text-slate-500">$ </span>cd my-app{"\n"}
          <span className="text-slate-500">$ </span>npm install{"\n"}
          <span className="text-slate-500">$ </span>npm run dev
        </pre>
      </div>

      {/* النص السفلي */}
      {/* text-slate-400 → لون muted */}
      <p className="text-slate-400 text-sm">
        Select <strong className="text-white">React</strong> +{" "}
        <strong className="text-white">TypeScript</strong> when prompted by
        Vite.
      </p>
    </div>
  );
};

export default Installation;
