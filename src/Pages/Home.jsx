import { useLoaderData } from "react-router";
import Coffees from "../Components/Coffees";
import Banner from "../Components/Banner";
import Quality from "../Components/Quality";
import { useState } from "react";
import Follow from "../Components/Follow";

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
