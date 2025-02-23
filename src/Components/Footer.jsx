import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import logo from "../assets/images/nav/logo1.png";
const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center bg-[url('/src/assets/bg-pattern.png')] bg-cover p-6 bg-gray-100">
      <div className="  w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="Logo" className="w-12 h-12 " />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            Espresso Emporium
          </h2>
          <p className="text-gray-600 mt-2">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>

          <div className="flex gap-4 justify-center md:justify-start mt-4 text-brown-700">
            <FaFacebookF className="cursor-pointer text-2xl hover:text-brown-500" />
            <FaTwitter className="cursor-pointer text-2xl hover:text-brown-500" />
            <FaInstagram className="cursor-pointer text-2xl hover:text-brown-500" />
            <FaLinkedinIn className="cursor-pointer text-2xl hover:text-brown-500" />
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mt-6">
            Get in Touch
          </h3>
          <div className="mt-2 text-gray-700">
            <p className="flex items-center gap-2">
              <FiPhone /> +88 01533 333 333
            </p>
            <p className="flex items-center gap-2">
              <FiMail /> info@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FiMapPin /> 72, Wall Street, King Road, Dhaka
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 text-center md:text-left">
            Connect with Us
          </h3>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered w-full h-24"
            ></textarea>
            <button className="btn btn-outline w-full border-brown-700 text-brown-700 hover:bg-brown-700 hover:text-white">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
