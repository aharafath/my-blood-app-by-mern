import Breadcrumb from "../component/breadcrumb/Breadcrumb";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import { Outlet, useLocation } from "react-router-dom";

const Layouts = () => {
  //Get Path
  const path = useLocation();

  //Block Breadcrumb List
  const blockBreadcrumb = ["/login", "/register", "/", "/donor-register"];
  return (
    <>
      <Header />
      {blockBreadcrumb.includes(path.pathname) ? (
        ""
      ) : (
        <Breadcrumb pathname={path.pathname} />
      )}

      <Outlet />
      <Footer />
    </>
  );
};

export default Layouts;
