import { Outlet } from "react-router-dom";
import Navpar from "../../component/Navpar";

const Layout = () => {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navpar />
      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "48px 24px",
        }}
        className="page-enter"
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
