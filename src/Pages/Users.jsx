import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const users = useLoaderData();
  const [updateUser, setUpdateUser] = useState(users);
  const handleDelete = (id) => {
    console.log(id);
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
        // delete form the database
        fetch(`https://coffee-shop-server-tan.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = updateUser.filter((item) => item._id !== id);
              setUpdateUser(remaining);
            }
            console.log(data);
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Time</th>
            <th>Last Login time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {users.map((user) => (
            <tr key={user._id} className="hover:bg-base-300">
              <th>1</th>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.userTime}</td>
              <td>{user.lastSignInTime}</td>
              <td className="flex flex-col w-1/2 space-y-2">
                <Link className="bg-gray-700 p-2 rounded-md text-white shadow-md cursor-pointer">
                  <FaEdit />
                </Link>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="bg-red-500 p-2 rounded-md text-white shadow-md cursor-pointer"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
