/* eslint-disable react/prop-types */
import { Link } from "react-router";
import bg from "../assets/images/more/1.png";
import CoffeeCard from "./CoffeeCard";
const Coffees = ({ coffees, presentCoffee, setPresentCoffee }) => {
  return (
    <div className="my-10">
      <div className="text-center my-4">
        <h2 className="text-3xl font-bold my-4">Our Popoular Products</h2>
        <Link to="/addcoffee" className="btn ">
          Add Coffee
        </Link>
      </div>
      <div
        className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            presentCoffee={presentCoffee}
            setPresentCoffee={setPresentCoffee}
          />
        ))}
      </div>
    </div>
  );
};

export default Coffees;
