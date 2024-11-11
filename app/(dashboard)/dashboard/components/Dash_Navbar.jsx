"use client";
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const userData = JSON.parse(data);
      setUser(userData);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("sessionToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    window.location.reload();
  };

  if (!user) {
    return null;
  }
 
 
  
  const { name, email } = user;
  const nameArr = name.split(" ");
  const firstChar = nameArr[0].charAt(0);

  return (
    <nav className="flex items-center justify-between bg-gray-900 p-4 mb-8">
      <div className="text-white font-bold text-xl">
        <img src="/logo.png" alt="Brand Logo" className="h-8" />
      </div>
      
      <div className="flex items-center space-x-16">
        <menu className="flex items-center space-x-4">
          <a href="/autoplugin" className="text-white hover:text-blue-400">AutoPlugin</a>
          <a href="/partners" className="text-white hover:text-blue-400">Partners</a>
          <a href="/user-management" className="text-white hover:text-blue-400">User Management</a>
          <a href="/stats" className="text-white hover:text-blue-400">Stats</a>
        </menu>
        
        <div
          className="relative flex items-center justify-center bg-red-100 h-10 w-10 rounded-full border-2 border-white"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {firstChar}
          {isHovered && (
            <div className="absolute -bottom-14 -left-14 transform -translate-x-1/2 w-48 bg-white p-2 rounded-md shadow-lg border">
              <p className="font-bold">{name}</p>
              <p className="text-sm text-gray-600">{email}</p>
              <hr className='py-2' />
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;    