import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffees = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const { _id, name, chef, supplier, taste, category, details, photo } =
    coffees;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateValue = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updateValue);
    fetch(`http://localhost:3000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateValue),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
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
              Update Your Coffee Name : {name}
            </h1>
            <p className="text-gray-600 mt-2">
              Fill in the details below to add a new coffee to your collection.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleUpdate} className="space-y-4">
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
                  defaultValue={name}
                  className="input input-bordered w-full"
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
                  defaultValue={chef}
                  placeholder="Enter chef name"
                  className="input input-bordered w-full"
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
                  defaultValue={supplier}
                  placeholder="Enter supplier name"
                  className="input input-bordered w-full"
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
                  defaultValue={taste}
                  placeholder="Enter coffee taste"
                  className="input input-bordered w-full"
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
                  defaultValue={category}
                  placeholder="Enter coffee category"
                  className="input input-bordered w-full"
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
                  defaultValue={details}
                  placeholder="Enter coffee details"
                  className="input input-bordered w-full"
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
                defaultValue={photo}
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </div>

            {/* Submit Button */}
            <button className="btn btn-primary w-full mt-4">
              Update Coffee
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateCoffee;
