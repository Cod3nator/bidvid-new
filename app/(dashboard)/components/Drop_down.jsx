"use client";
import React, { useState, useRef } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

const CustomDropdown = ({ options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-64" ref={dropdownRef}>
      {/* Dropdown Toggle */}
      <button
        className="flex items-center justify-between bg-gray-50 h-10 px-4 w-full rounded-md shadow-sm border border-gray-300 focus:outline-none"
        onClick={handleToggle}
      >
        <span className="text-sm text-gray-700">
          {selected || "Select Role"}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        )}
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-2 shadow-lg w-full">
          {options.map((option) => (
            <li
              key={option}
              className={`flex items-center justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 ${
                selected === option ? "font-semibold" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
              {selected === option && (
                <Check className="w-4 h-4 text-green-500" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const App = () => {
  const [selectedRole, setSelectedRole] = useState("");

  const roles = ["Super Admin", "User", "Manager"];

  return (
    <div className="p-8 bg-gray-100 h-screen">
      <h1 className="text-xl font-bold mb-4">Custom Dropdown Example</h1>
      <CustomDropdown
        options={roles}
        selected={selectedRole}
        onChange={setSelectedRole}
      />
      {selectedRole && (
        <p className="mt-4 text-gray-700">
          Selected Role: <strong>{selectedRole}</strong>
        </p>
      )}
    </div>
  );
};

export default App;
