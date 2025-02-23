import { useLoaderData } from "react-router";
import Coffees from "./Coffees";
import Banner from "./Banner";
import Quality from "./Quality";

const Home = () => {
  const coffees = useLoaderData();
  return (
    <>
      <div>
        <Banner />
        <Quality />
      </div>
      <div>
        <Coffees coffees={coffees} />
      </div>
    </>
  );
};

export default Home;
