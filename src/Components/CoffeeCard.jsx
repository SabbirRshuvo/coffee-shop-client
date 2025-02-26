import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee, presentCoffee, setPresentCoffee }) => {
  const { _id, name, chef, supplier, photo } = coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-shop-server-tan.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = presentCoffee.filter(
                (item) => item._id !== _id
              );
              setPresentCoffee(remaining);
            }
          });
      }
    });
  };
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
          <Link
            to={`/coffeedetails/${_id}`}
            className="bg-[#c8a27c] p-2 rounded-md text-white shadow-md cursor-pointer"
          >
            <FaEye />
          </Link>
          <Link
            to={`/updatecoffee/${_id}`}
            className="bg-gray-700 p-2 rounded-md text-white shadow-md cursor-pointer"
          >
            <FaEdit />
          </Link>
          <button
            className="bg-red-500 p-2 rounded-md text-white shadow-md cursor-pointer"
            onClick={() => handleDelete(_id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
