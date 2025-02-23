import { useLoaderData } from "react-router";
import Coffees from "./Coffees";
import Banner from "./Banner";
import Quality from "./Quality";
import { useState } from "react";
import Follow from "./Follow";

const Home = () => {
  const coffees = useLoaderData();
  const [presentCoffee, setPresentCoffee] = useState(coffees);
  return (
    <>
      <div>
        <Banner />
        <Quality />
      </div>
      <div>
        <Coffees
          coffees={coffees}
          presentCoffee={presentCoffee}
          setPresentCoffee={setPresentCoffee}
        />
      </div>
      <Follow />
    </>
  );
};

export default Home;
