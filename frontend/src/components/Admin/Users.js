import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../actions/userActions";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users?.users || []);

  useEffect(() => {
    const fetching = async () => {
      await dispatch(fetchUsers());
    };
    fetching();
  }, [dispatch]);

  if (users.length === 0) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="p-6 max-sm:p-0 text-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">User List</h2>
      <div className="overflow-x-auto">
        <table className="w-[1000px] max-sm:w-20 border border-gray-700 text-left rounded-lg">
          <thead className="bg-gray-800">
            <tr className="text-white">
              <th className="p-3 border border-gray-600">No</th>
              <th className="p-3 border border-gray-600">User Name</th>
              <th className="p-3 border border-gray-600">User Email</th>
              <th className="flex justify-center p-3 border border-gray-600">
                Profile Picture
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user._id} className="hover:bg-gray-800 transition-all">
                  <td className="px-3 py-4 border border-gray-600">
                    {index + 1}
                  </td>
                  <td className="px-3 py-4 border border-gray-600">
                    {user.name}
                  </td>
                  <td className="px-3 py-4 border border-gray-600">
                    {user.email}
                  </td>
                  <td className="px-3 py-4 border border-gray-600">
                    {user.image ? (
                      <a
                        href={user.image}
                        target="_blank"
                        rel="noreferrer"
                        className="flex justify-center"
                      >
                        <img
                          src={user.image}
                          alt={user.name}
                          className="w-12 h-12 object-cover rounded-full border border-gray-500 shadow-md hover:scale-110 transition-transform"
                        />
                      </a>
                    ) : (
                      <span className="flex justify-center text-gray-400">
                        No Image
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-400">
                  No users available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
