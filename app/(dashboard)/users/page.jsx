"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, Check, Pencil } from "lucide-react";

const backend_api = "https://devapi.bidvid.in";
const Users = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedRole, setSelectedRole] = useState("");

  const roles = ["Super Admin", "User", "Manager"];

  const dummyUsers = [
    {
      name: "John Doe",
      status: 1,
      type: "Premium",
      role: "Super Admin",
      email: "john.doe@example.com",
      signupDate: "2024-11-01",
    },
    {
      name: "Jane Smith",
      status: 0,
      type: "Standard",
      role: "User",
      email: "jane.smith@example.com",
      signupDate: "2024-10-20",
    },
    {
      name: "Alice Johnson",
      status: 1,
      type: "Premium",
      role: "Manager",
      email: "alice.johnson@example.com",
      signupDate: "2024-09-15",
    },
    {
      name: "Michael Brown",
      status: 0,
      type: "Basic",
      role: "User",
      email: "michael.brown@example.com",
      signupDate: "2024-08-12",
    },
  ];
  const [userData, setUserData] = useState();
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

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (role) => {
    setSelectedRole(role);
    setFilterRole(role);
    setIsOpen(false);
  };

  const filteredUsers = dummyUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterRole ? user.role === filterRole : true)
  );

  return (
    <div className="p-8 bg-gray-100 h-screen">
      <div
        className="bg-white p-8 rounded-lg mt-20"
        style={{ borderRadius: "24px" }}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">Users </h2>
          <div className="flex space-x-4 items-center">
            {/* Dropdown for Role Filter */}
            {/* <div className="relative w-64" ref={dropdownRef}>
              <button
                className="flex items-center justify-between bg-gray-50 h-10 px-4 w-full rounded-md shadow-sm border border-gray-300 focus:outline-none"
                onClick={handleToggle}
              >
                <span className="text-sm text-gray-700">
                  {selectedRole || "Select Role"}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                )}
              </button>

              {isOpen && (
                <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-2 shadow-lg w-full">
                  <li
                    key="all"
                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleOptionClick("")}
                  >
                    All Roles
                  </li>
                  {roles.map((role) => (
                    <li
                      key={role}
                      className={`flex items-center justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 ${
                        selectedRole === role ? "font-semibold" : ""
                      }`}
                      onClick={() => handleOptionClick(role)}
                    >
                      {role}
                      {selectedRole === role && (
                        <Check className="w-4 h-4 text-green-500" />
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div> */}
          </div>
        </div>
        {/* Table */}
        <table className="min-w-full bg-white rounded-md">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
                Name
              </th>
              {/* <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
                Role
              </th> */}
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
                Email
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600"></th>
              {/* <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
                Signup Date
              </th> */}
            </tr>
          </thead>
          <tbody>
            {userData &&
              userData?.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {`${user.first_name} ${user.last_name}`}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {true ? (
                      <span className="text-green-500 bg-green-100 py-1 px-4 rounded-lg border border-green-300">
                        Active
                      </span>
                    ) : (
                      <span className="text-red-500 bg-red-200 py-1 px-4 rounded-lg border border-red-300">
                        Not Active
                      </span>
                    )}
                  </td>
                  <td
                    className="px-6 py-4 text-sm text-gray-800 hover:cursor-pointer hover:bg-blue-200 flex justify-center items-center"
                    onClick={() => {
                      const confirmed = window.confirm(
                        "Are you sure you want to make changes to the user data url?"
                      );
                      if (confirmed) {
                        // Proceed with your logic to make changes to the user data (e.g., navigate to the user data URL)
                        console.log("User data will be changed.");
                      }
                    }}
                  >
                    <Pencil size={20} strokeWidth={1.25} />
                  </td>

                  {/* <td className="px-6 py-4 text-sm text-gray-800">
                  {user.status === 1 ? (
                    <span className="text-green-500 bg-green-100 py-1 px-4 rounded-lg border border-green-300">
                      Active
                    </span>
                  ) : (
                    <span className="text-red-500 bg-red-200 py-1 px-4 rounded-lg border border-red-300">
                      Not Active
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">{user.role}</td> */}

                  {/* <td className="px-6 py-4 text-sm text-gray-800">
                  {user.signupDate}
                </td> */}
                </tr>
              ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                  No users found
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
