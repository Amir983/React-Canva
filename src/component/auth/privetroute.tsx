import { ReactNode } from "react";
import { Navigate } from "react-router-dom"; // ✅ امسح data من الاستيراد

interface Iprops {
  isAllowed: boolean;
  redirecpath: string;
  children: ReactNode;
  data: unknown;
}

const Privetroute = ({ isAllowed, redirecpath, children, data }: Iprops) => {
  //                                                        ☝️ خد data من الـ props
  if (!isAllowed) return <Navigate to={redirecpath} replace state={data} />;
  return children;
};

export default Privetroute;
