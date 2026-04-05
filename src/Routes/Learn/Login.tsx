import React from "react";
import Input from "../../component/UI/Input";
import Button from "../../component/UI/Button";

const Login = () => {
  return (
    // max-w-sm → أقصى عرض 400px تقريباً عشان الكارت ميفردش
    // mx-auto → سنتر أفقي
    // pt-8 → padding من فوق عشان الكارت ينزل شوية
    <div className="fixed inset-0 max-w-sm mx-auto pt-8 px-4">
      {/* الكارت: خلفية غامقة وحدود وحواف دائرية */}
      <div className="bg-surface border border-border rounded-2xl p-9">
        {/* رأس الكارت */}
        <div className="mb-7">
          {/* العنوان الرئيسي */}
          <h2 className="text-xl font-bold mb-1.5 text-white">Sign in</h2>

          {/* نص توضيحي بلون أفتح */}
          <p className="text-slate-400 text-sm">
            Login to contribute to the docs
          </p>
        </div>

        {/* منطقة المدخلات */}
        {/* flex flex-col gap-4 → عناصر تحت بعض بمسافة بينهم */}
        <div className="flex flex-col gap-4">
          <Input placeholder="Email address" />
          <Input placeholder="Password" />
          <Button>Login</Button>
        </div>

        {/* النص السفلي */}
        {/* mt-5 → مسافة من فوق */}
        {/* text-center → نص في المنتصف */}
        <p className="mt-5 text-center text-xs text-slate-400">
          Want to contribute? {/* text-accent → لون الـ accent */}
          {/* hover:underline → underline عند الهوفر بس */}
          <a className="text-accent hover:underline cursor-pointer">
            Submit a report →
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
