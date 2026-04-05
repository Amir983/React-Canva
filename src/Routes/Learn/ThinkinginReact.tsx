const ThinkinginReact = () => {
  return (
    // max-w-2xl → أقصى عرض 680px عشان النص ميفردش
    // page-enter → أنيميشن دخول الصفحة
    <div className="max-w-2xl page-enter">
      {/* الـ Label الصغير فوق العنوان */}
      {/* uppercase tracking-widest → حروف كبيرة ومتباعدة */}
      <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
        Thinking in React
      </p>

      {/* العنوان الرئيسي */}
      <h1 className="text-3xl font-bold text-white mb-5">Thinking in React</h1>

      {/* النص التوضيحي */}
      {/* leading-relaxed → تباعد مريح بين السطور */}
      <p className="text-text-dim leading-relaxed text-base mb-8">
        React can change how you think about the designs you look at and the
        apps you build. When you build a user interface with React, you will
        first break it apart into pieces called <em>components</em>.
      </p>

      {/* الـ Callout Box */}
      {/* border-l-4 border-accent → خط جانبي بلون الـ accent */}
      {/* bg-surface → خلفية الكارت */}
      {/* rounded-xl → حواف دائرية */}
      <div className="bg-surface border border-border border-l-4 border-l-accent rounded-xl px-6 py-5 text-sm text-text-dim leading-relaxed">
        💡 Think of components as LEGO bricks — you build big things from small,
        reusable pieces. Each component owns its own data (state) and its own
        look (JSX).
      </div>
    </div>
  );
};

export default ThinkinginReact;
