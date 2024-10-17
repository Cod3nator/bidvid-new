"use client";
import PasswordInput from "@/component/PasswordInput";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);

  };

 

  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-1/2 bg-gray-800 flex justify-center items-center">
          <div className="text-center">
            <img src="/logo.png" alt="Brand Logo" className="mx-auto" />
          </div>
        </div>

        <div className="w-1/2 bg-white flex justify-center items-center">
          <div className="w-full max-w-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Create Account
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name} // Update this in your state
                    onChange={handleChange}
                    className="p-2 w-full"
                    required
                  />
                  <label htmlFor="name" className="text-sm text-gray-500">
                    Full Name
                  </label>
                </div>
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email} // Update this in your state
                    onChange={handleChange}
                    className="p-2 w-full"
                    required
                  />
                  <label htmlFor="email" className="text-sm text-gray-500">
                    Email Address
                  </label>
                </div>
              </div>

              {/* User ID Input */}
              <div className="mb-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="userId"
                    placeholder="User ID"
                    value={formData.userId}
                    onChange={handleChange}
                    className="p-2 w-full "
                    required
                  />
                  <label htmlFor="userId" className="text-sm text-gray-500">
                    User ID
                  </label>
                </div>
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <PasswordInput
                  password={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Confirm Password Input */}
              <div className="mb-6">
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword} 
                    onChange={handleChange}
                    className="p-2 w-full "
                    required
                  />
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm text-gray-500"
                  >
                    Confirm Password
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Create Account
              </button>
            </form>

            {/* <p
              className="mt-4 text-blue-600 cursor-pointer"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </p> */}

            <div className="flex items-center justify-between mt-6">
              <span>
                Already have an account?{" "}
                <a href="/login" className="text-blue-600">
                  Log In
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
