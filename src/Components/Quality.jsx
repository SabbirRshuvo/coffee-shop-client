import q1 from "../assets/images/icons/1.png";
import q2 from "../assets/images/icons/2.png";
import q3 from "../assets/images/icons/3.png";
import q4 from "../assets/images/icons/4.png";

const Quality = () => {
  return (
    <div className="bg-gray-200 md:flex gap-6 p-4">
      <div className="flex flex-col">
        <img className="w-24" src={q1} alt="" />
        <h3>Awesome Aroma</h3>
        <p>You will definitely be a fan of the design & aroma of your coffee</p>
      </div>
      <div className="flex flex-col">
        <img className="w-24" src={q2} alt="" />
        <h3>High Quality</h3>
        <p>We served the coffee to you maintaining the best quality</p>
      </div>
      <div className="flex flex-col">
        <img className="w-24" src={q3} alt="" />
        <h3>Pure Grades</h3>
        <p>The coffee is made of the green coffee beans which you will love</p>
      </div>
      <div className="flex flex-col">
        <img className="w-24" src={q4} alt="" />
        <h3>Proper Roasting</h3>
        <p>Your coffee is brewed by first roasting the green coffee beans</p>
      </div>
    </div>
  );
};

export default Quality;
