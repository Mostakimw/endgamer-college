import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-55vh)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
