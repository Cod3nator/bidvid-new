"use client";
import React, { useState, useEffect } from "react";

const backend_api = "https://devapi.bidvid.in";

const ContactList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${backend_api}/contact-us`, {
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

  return (
    <div className="p-8 bg-gray-100 h-screen">
      <div
        className="bg-white p-8 rounded-lg mt-20"
        style={{ borderRadius: "24px" }}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">Users </h2>
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
                Mobile
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
                Message
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-800">
                  {user.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {user.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {user.mobile}
                </td>
                <td
                  className="px-6 py-4 text-sm text-gray-800 break-words"
                  style={{ wordWrap: "break-word", whiteSpace: "normal" }}
                >
                  {user.message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ContactListPage = () => {
  const [userRole, setUserRole] = useState(null); 
  const [loading, setLoading] = useState(true);
  const roles = localStorage.getItem("roles");

  useEffect(() => {
    if (roles) {
      const rolesArray = roles.split(","); // Split the comma-separated string into an array
      console.log(rolesArray);
  
      if (rolesArray.includes("super-admin")) {
        setUserRole("super-admin");
      } else {
        setUserRole(""); // Set userRole to empty if the user is not a super-admin
      }
    }
  
    setLoading(false); // Ensure setLoading is called after roles are processed
  }, [roles]); // Trigger effect when roles change
  

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 border-4 border-t-4 border-gray-700 border-solid rounded-full animate-spin"></div>
          <span className="text-xl text-gray-700 animate-pulse">Loading...</span>
        </div>
      </div>
    );
  }

  if (userRole !== "super-admin") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">Unauthorized</h1>
          <p className="text-gray-600 mt-4">You do not have access to this page.</p>
        </div>
      </div>
    );
  }else{
    return <ContactList />;
  }

  
};

export default ContactListPage;
