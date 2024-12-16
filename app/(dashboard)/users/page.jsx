"use client";
import React, { useState, useEffect, use } from "react";
import { ChevronDown, ChevronUp, Pencil } from "lucide-react";
import { toast } from "react-toastify";

const backend_api = "https://devapi.bidvid.in";

const Users = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [openEditUser, setOpenEditUser] = useState(false);
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const roles = ["Super Admin", "User", "Manager"];
  const [error, setErrors] = useState({});

  // Fetch users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${backend_api}/users`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setUserData(data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleOptionClick = (role) => {
    setFilterRole(role);
  };

  const openEditUserModal = (user) => {
    setOpenEditUser(true);
    setSelectedUser(user);
  };

  const handleEditUser = async (event) => {
    event.preventDefault();

    const data = {
      active: selectedUser.status,
      report_url: selectedUser.report_url,
    };

    try {
      const response = await fetch(`${backend_api}/users/${selectedUser.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resp = await response.json();
      if (response.status === 200) {
        toast.success("User updated successfully", { autoClose: 1000 });
        setUserData((prev) =>
          prev.map((user) => (user.id === selectedUser.id ? resp.data : user))
        );
        setOpenEditUser(false);
      } else {
        setErrors(resp.errors);
        toast.error("Failed to update user", { autoClose: 1000 });
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const toggleUserModal = () => {
    setOpenEditUser((prev) => !prev);
  };

  return (
    <div className="p-8 bg-gray-100 h-screen">
      <div
        className="bg-white p-8 rounded-lg mt-20"
        style={{ borderRadius: "24px" }}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">Users</h2>
        </div>
        <table className="min-w-full bg-white rounded-md">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
                Email
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600"></th>
            </tr>
          </thead>
          <tbody>
            {userData.length > 0 ? (
              userData.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {`${user.first_name} ${user.last_name}`}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {user.status ? (
                      <span className="text-green-500 bg-green-100 py-1 px-4 rounded-lg border border-green-300">
                        Active
                      </span>
                    ) : (
                      <span className="text-red-500 bg-red-200 py-1 px-4 rounded-lg border border-red-300">
                        Inactive
                      </span>
                    )}
                  </td>
                  <td
                    className="px-6 py-4 text-sm text-gray-800 hover:cursor-pointer hover:bg-blue-200 flex justify-center items-center"
                    onClick={() => {
                      openEditUserModal(user);
                    }}
                  >
                    <Pencil size={20} strokeWidth={1.25} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {openEditUser && (
          <>
            <div
              className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
              onClick={toggleUserModal}
            ></div>

            <div
              className="fixed bg-white p-6 shadow-lg w-96 flex flex-col justify-center items-center rounded-lg space-y-4"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 50,
              }}
            >
              <h2 className="text-lg font-semibold mb-4 align-start w-full">
                Edit User
              </h2>
              <form
                onSubmit={handleEditUser}
                className="w-full gap-4 flex flex-col justify-center align-start"
              >
                <div className="mb-4">
                  <div className="semibold">
                    Name:{" "}
                    <span className="text-gray-600 italic">{`${selectedUser.first_name} ${selectedUser.last_name}`}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div>Status</div>
                  <div
                    onClick={() =>
                      setSelectedUser((prev) => ({
                        ...prev,
                        status: !prev.status,
                      }))
                    }
                    className={`relative inline-flex items-center w-16 h-8 rounded-full transition-colors ${
                      selectedUser.status ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`absolute left-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                        selectedUser.status ? "translate-x-8" : "translate-x-0"
                      }`}
                    ></span>
                    <span
                      className={`absolute text-xs font-semibold uppercase ${
                        selectedUser.status
                          ? "left-24 text-green-500"
                          : "left-24 text-gray-600"
                      }`}
                    >
                      {selectedUser.status ? "Active" : "Inactive"}
                    </span>
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="report_url"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Report URL
                  </label>
                  <input
                    id="report_url"
                    name="report_url"
                    placeholder="Report URL"
                    value={selectedUser.report_url || " "}
                    onChange={(e) => {
                      setErrors("");
                      setSelectedUser((prev) => ({
                        ...prev,
                        report_url: e.target.value,
                      }));
                    }}
                    className="p-2 w-full placeholder:text-gray-400 border-b-2 border-black focus:outline-none focus:ring-0"
                  />
                  {error && (
                    <span className="text-red-500 text-sm">
                      {error?.report_url}
                    </span>
                  )}
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                    onClick={toggleUserModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Users;
