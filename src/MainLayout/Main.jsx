import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[497px]  ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
