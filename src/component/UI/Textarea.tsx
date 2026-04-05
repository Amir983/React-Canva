import { TextareaHTMLAttributes } from "react";

interface Iprops extends TextareaHTMLAttributes<HTMLTextAreaElement> {}
const Textarea = ({ ...rest }: Iprops) => {
  return (
    <textarea
      className="border-[1px] border-gary-300 shadow-md focus:border-[#149eca] focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-lg px-3 py-3 text-md "
      rows={6}
      {...rest}
    />
  );
};

export default Textarea;
