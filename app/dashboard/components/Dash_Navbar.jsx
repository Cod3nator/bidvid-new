// app/dashboard/components/Navbar.jsx

import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-500 p-4 mb-8">

      <div className="text-white font-bold text-xl">
        <img src="/logo.png" alt="Brand Logo" className="h-8" />
      </div>
      
      <div className="flex items-center space-x-16">
     <menu className="flex items-center space-x-4">
      <a href='/dashboard/stats' className="text-white hover:text-blue-400">Stats</a>
     <a href="/autoplugin" className="text-white hover:text-blue-400">AutoPlugin</a>
        <a href="/partners" className="text-white hover:text-blue-400">Partners</a>
        <a href="/user-management" className="text-white hover:text-blue-400">User Management</a>

     </menu>
        <div className="relative flex items-center justify-center bg-red-100 h-10 w-10 rounded-full border-2 border-white">
          {/* <img
            src="/path/to/avatar.png" 
            alt="User Avatar"
            className="h-10 w-10 rounded-full border-2 border-white"
          /> */}
          A
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
