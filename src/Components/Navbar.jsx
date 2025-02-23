import { Link } from "react-router";
import backgroundImage from "../assets/images/nav/15.jpg";
import logo from "../assets/images/nav/logo1.png";
const Navbar = () => {
  return (
    <Link
      to="/"
      className="bg-cover bg-center h-16 flex items-center justify-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }} //
    >
      <div className="absolute inset-0 "></div>

      <div className="relative flex items-center justify-center">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-12 h-12 rounded-full " />

        {/* Text */}
        <h1 className="text-white text-xl font-bold ml-3">Expresso Emporium</h1>
      </div>
    </Link>
  );
};

export default Navbar;
