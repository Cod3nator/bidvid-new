"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState({
    first_name: "Loading",
    last_name: "User",
    email: "loading@example.com",
    roles: [{ name: "guest" }],
  }); 
  const [isClicked, setClicked] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser();
      if (data) {
        const userData = data.data;
        setUser(userData);
      }
    };
    fetchUser();
  }, []);

  const getUser = async () => {
    // Fetch the access_token from cookies
    const accessToken = localStorage.getItem("access_token");
  
    if (!accessToken) {
      console.error("Access token not found!");
      return;
    }
  
  
    try {
      const user = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/my-profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      const data = await user.json();
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const { first_name, last_name, email, roles } = user;
  const name = `${first_name} ${last_name}`;
  const firstChar = first_name.charAt(0).toUpperCase();

  const handleAvatarClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between bg-gray-900 p-4 mb-8">
      <div className="text-white font-bold text-xl">
        <img src="/logo.png" alt="Brand Logo" className="h-8" />
      </div>

      <div className="flex items-center space-x-16">
        <menu className="flex items-center space-x-4">
          <a href="/autoplugin" className="text-white hover:text-blue-400">
            AutoPlugin
          </a>
          <a href="/partners" className="text-white hover:text-blue-400">
            Partners
          </a>
          <a href="/user-management" className="text-white hover:text-blue-400">
            User Management
          </a>
          <a href="/stats" className="text-white hover:text-blue-400">
            Stats
          </a>
        </menu>

        <div className="relative">
          <div
            className="flex items-center justify-center bg-red-100 h-10 w-10 rounded-full border-2 border-white cursor-pointer"
            onClick={handleAvatarClick}
          >
            {firstChar}
          </div>
          {isClicked && (
            <div
              className="absolute space-y-2 w-60 bg-white p-3 rounded-md shadow-lg border"
              style={{ top: "100%", right: "0" }}
            >
              <p className="font-bold text-lg">{name}</p>
              <p className="text-sm text-gray-600">{email}</p>
              {roles && roles.length > 0 && (
                <p className="mt-2 text-sm text-gray-700">
                  Roles: {roles.map((role) => role.name).join(", ")}
                </p>
              )}
              <hr className="my-2" />
              <button
                onClick={handleLogout}
                className="w-full text-sm text-red-600 bg-gray-100 py-1 rounded-md hover:bg-red-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
