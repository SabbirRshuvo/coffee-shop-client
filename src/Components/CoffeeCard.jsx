import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee }) => {
  const { name, chef, supplier, photo } = coffee;
  return (
    <>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center gap-4">
        <img src={photo} alt={coffee.name} className="w-24 h-auto rounded-md" />

        <div className="flex-1">
          <p className="text-lg font-bold">
            <span className="text-gray-800">Name:</span> {name}
          </p>
          <p className="text-lg">
            <span className="text-gray-800 font-bold">Chef:</span> {chef}
          </p>
          <p className="text-lg">
            <span className="text-gray-800 font-bold">Chef:</span> {supplier}
          </p>

          <p className="text-lg">
            <span className="text-gray-800 font-bold">Price: 560tk</span> {}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <button className="bg-[#c8a27c] p-2 rounded-md text-white shadow-md">
            <FaEye />
          </button>
          <button className="bg-gray-700 p-2 rounded-md text-white shadow-md">
            <FaEdit />
          </button>
          <button className="bg-red-500 p-2 rounded-md text-white shadow-md">
            <FaTrash />
          </button>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
