import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

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
