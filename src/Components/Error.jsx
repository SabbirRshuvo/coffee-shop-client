import error from "../assets/images/404/404.gif";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Error = () => {
  return (
    <div>
      <Navbar />
      <img src={error} alt="" />
      <Footer />
    </div>
  );
};

export default Error;
