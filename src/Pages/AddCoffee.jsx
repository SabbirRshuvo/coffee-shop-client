/* eslint-disable no-undef */
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const userValue = { name, chef, supplier, taste, category, details, photo };
    console.log(userValue);
    fetch("https://coffee-shop-server-tan.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userValue),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your operation was successful.",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#16a34a",
          });
        }
      });
    form.reset();
  };
  return (
    <>
      <div className="w-10/12   mx-auto mt-4">
        <Link to="/" className="flex items-center gap-2">
          {" "}
          <FaArrowRightArrowLeft /> Back
        </Link>
      </div>
      <div className=" p-6 w-10/12 mx-auto ">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-3xl">
          {/* Heading and Description */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Add a New Coffee
            </h1>
            <p className="text-gray-600 mt-2">
              Fill in the details below to add a new coffee to your collection.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="label">
                  {" "}
                  <span className="text-gray-700">Name</span>{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* Chef */}
              <div>
                <label className="label">
                  {" "}
                  <span className="text-gray-700">Chef</span>{" "}
                </label>
                <input
                  type="text"
                  name="chef"
                  placeholder="Enter chef name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* Supplier */}
              <div>
                <label className="label">
                  {" "}
                  <span className="text-gray-700">Supplier</span>{" "}
                </label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter supplier name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* Taste */}
              <div>
                <label className="label">
                  {" "}
                  <span className="text-gray-700">Taste</span>{" "}
                </label>
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* Category */}
              <div>
                <label className="label">
                  {" "}
                  <span className="text-gray-700">Category</span>{" "}
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* Details */}
              <div>
                <label className="label">
                  {" "}
                  <span className="text-gray-700">Details</span>{" "}
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            {/* Photo URL (Full Width) */}
            <div>
              <label className="label">
                {" "}
                <span className="text-gray-700">Photo URL</span>{" "}
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Submit Button */}
            <button className="btn btn-primary w-full mt-4">Add Coffee</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCoffee;
