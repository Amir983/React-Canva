const QuickStartPage = () => {
  return (
    // max-w-2xl → أقصى عرض 680px عشان النص ميفردش
    // page-enter → أنيميشن دخول الصفحة
    <div className="max-w-2xl page-enter">
      {/* الـ Label الصغير فوق العنوان */}
      {/* uppercase tracking-widest → حروف كبيرة ومتباعدة */}
      <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
        Quick Start
      </p>

      {/* العنوان الرئيسي */}
      <h1 className="text-3xl font-bold text-white mb-5">Get up and running</h1>

      {/* النص التوضيحي */}
      {/* leading-relaxed → تباعد مريح بين السطور */}
      <p className="text-text-dim leading-relaxed text-base mb-10">
        Welcome to the React documentation! This page will give you an
        introduction to 80% of the React concepts that you will use on a daily
        basis.
      </p>

      {/* الـ Steps */}
      {[
        {
          num: "01",
          title: "Create a Component",
          desc: "React components are JavaScript functions. Export a function called MyButton that contains markup.",
        },
        {
          num: "02",
          title: "Add JSX Markup",
          desc: "The markup syntax you use in React components is called JSX. It looks like HTML, but stricter.",
        },
        {
          num: "03",
          title: "Add Styles",
          desc: "In React, you specify a CSS class with className. It works the same way as the HTML class attribute.",
        },
      ].map(({ num, title, desc }) => (
        // كل step: flex عشان الرقم والنص يبقوا جنب بعض
        // gap-5 → مسافة بين الرقم والنص
        // py-6 → padding أعلى وتحت
        // border-b → خط فاصل تحت كل step
        <div
          key={num}
          className="flex gap-5 items-start py-6 border-b border-border"
        >
          {/* الرقم (Badge) */}
          {/* font-mono → خط برمجي */}
          {/* flex-shrink-0 → عشان الرقم ميتلخبطش لو النص طويل */}
          {/* mt-0.5 → محاذاة بسيطة مع العنوان */}
          <span className="font-mono text-xs text-accent bg-accent/10 px-2.5 py-1 rounded-md flex-shrink-0 mt-0.5">
            {num}
          </span>

          {/* النص */}
          <div>
            {/* عنوان الـ step */}
            <h3 className="text-base font-semibold text-white mb-1.5">
              {title}
            </h3>

            {/* وصف الـ step */}
            {/* text-slate-400 → لون muted */}
            {/* leading-relaxed → تباعد مريح */}
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickStartPage;
