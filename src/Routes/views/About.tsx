const About = () => {
  return (
    // max-w-xl → أقصى عرض 640px عشان النص ميفردش
    <div className="max-w-xl">
      {/* الـ Label الصغير فوق العنوان */}
      {/* uppercase tracking-widest → حروف كبيرة ومتباعدة */}
      <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
        About
      </p>

      {/* العنوان الرئيسي */}
      <h2 className="text-2xl font-bold text-white mb-5">
        Built for developers,
        <br />
        by developers
      </h2>

      {/* النص الأساسي */}
      {/* leading-relaxed → تباعد مريح بين السطور */}
      {/* text-text-dim → لون أفتح من الأبيض بس مش muted */}
      <p className="text-text-dim leading-relaxed mb-4">
        This is a learning resource built to help developers understand React
        from the ground up — covering components, state, routing, and modern
        patterns used in production apps.
      </p>

      {/* النص الثانوي */}
      {/* text-slate-400 → لون muted أفتح من الأساسي */}
      {/* text-sm → حجم أصغر عشان يكون ثانوي بصرياً */}
      <p className="text-slate-400 leading-relaxed text-sm">
        All content is open for contributions. Found a bug or want to improve an
        explanation? Head to the Contribute page and submit a report.
      </p>
    </div>
  );
};

export default About;
