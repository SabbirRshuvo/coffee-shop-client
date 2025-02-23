import coffee1 from "../assets/images/cups/Rectangle 9.png";
import coffee2 from "../assets/images/cups/Rectangle 10.png";
import coffee3 from "../assets/images/cups/Rectangle 11.png";
import coffee4 from "../assets/images/cups/Rectangle 12.png";
import coffee5 from "../assets/images/cups/Rectangle 13.png";
import coffee6 from "../assets/images/cups/Rectangle 14.png";
import coffee7 from "../assets/images/cups/Rectangle 15.png";
import coffee8 from "../assets/images/cups/Rectangle 16.png";

const Follow = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold my-8">
        Follow On Instargram{" "}
      </h2>

      <div className="w-10/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <img src={coffee1} alt="" />
        <img src={coffee2} alt="" />
        <img src={coffee3} alt="" />
        <img src={coffee4} alt="" />
        <img src={coffee5} alt="" />
        <img src={coffee6} alt="" />
        <img src={coffee7} alt="" />
        <img src={coffee8} alt="" />
      </div>
    </div>
  );
};

export default Follow;
