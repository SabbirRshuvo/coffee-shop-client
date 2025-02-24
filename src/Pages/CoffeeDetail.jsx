import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } = coffee;
  return (
    <>
      <div className="w-10/12   mx-auto mt-4">
        <Link to="/" className="flex items-center gap-2">
          {" "}
          <FaArrowRightArrowLeft /> Back
        </Link>
      </div>
      <div className="max-w-5xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6">
        <img src={photo} alt={name} className="w-48 h-auto rounded-lg" />

        <div className="text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Niceties</h2>
          <p className="text-lg">
            <span className="font-semibold">Name:</span> {name}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Chef:</span> {chef}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Supplier:</span> {supplier}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Taste:</span> {taste}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Details:</span> {details}
          </p>
        </div>
      </div>
    </>
  );
};

export default CoffeeDetails;
