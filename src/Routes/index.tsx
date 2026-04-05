import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from "react-router-dom";
import Navpar from "../component/Navpar";
import Home from "./views/Home";
import About from "./views/About";
import Layout from "./views/Layout";
import Layoquikstartpageut from "./Learn/index";
import Layout1 from "./Learn/Layout1";
import ThinkinginReact from "./Learn/ThinkinginReact";
import Installation from "./Learn/Installation";
import Login from "./Learn/Login";
import Contributepage from "./Learn/Contributepage";
import Page from "./views/Page";
import Privetroute from "../component/auth/privetroute";
import ErrorElement from "../component/errors/ErrorElemant";
import PageNotFounde from "./Learn/PageNotFounde";
const isLoginIn = true;
const userData: { email: string } | null = isLoginIn
  ? { email: "email@gmail.com" }
  : null;
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Layout />}
        errorElement={<ErrorElement statuscode={404} />}
      >
        {/* اي حاجة جوه الكمبوننت ده هتبقي ثابتة علي مدار المشروع كله */}
        <Route
          index
          element={
            <h3>
              <Home />
            </h3>
          }
        />
        <Route path="/page" element={<Page />} />
        <Route
          path="/about"
          element={
            <h3>
              <About />
            </h3>
          }
        />
        <Route
          path="/Login"
          element={
            <Privetroute
              isAllowed={!isLoginIn}
              redirecpath={"/Contribute"}
              data={userData}
            >
              <Login />
            </Privetroute>
          }
        />
        <Route
          path="/Contribute"
          element={
            <Privetroute
              isAllowed={isLoginIn}
              redirecpath={"/Login"}
              data={userData}
            >
              <Contributepage />
            </Privetroute>
          }
        />
      </Route>
      <Route path="/Learn" element={<Layout1 />}>
        <Route index element={<Layoquikstartpageut />} />
        <Route path="Thinking" element={<ThinkinginReact />} />
        <Route path="Contribute" element={<Contributepage />} /> // ✅
        <Route path="Installation" element={<Installation />} />
      </Route>
      <Route path="*" element={<PageNotFounde />} /> {/*Page Not founed */}
    </>,
  ),
);
export default router;

/**
 * Layout.tsx
 * page component => index.tsx => Home page
 * page component => Contact.tsx => contact page
 * page component => About.tsx => About page
 */
