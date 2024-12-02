"use client";
import Toast from "../../../component/dashboard/Toast";
import PasswordInput from "../../../component/PasswordInput";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const backend_api = "https://devapi.bidvid.in"
const Page = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSuccess, setToastSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [restPassMail, setRestPassMail] = useState("");
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
    setLoading(true);
    setError(null);
  
    if (!formData.email && !formData.password) {
      setToastSuccess(false);
      setToastMessage("Please enter both email and password.");
      setTimeout(() => {
        setToastSuccess(null);
      }, 5000);
      setLoading(false);
      return;
    }
  
   
  
    try {
      const res = await fetch(`${backend_api}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }
  
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
  
      // Show success toast
      setToastSuccess(true);
      setToastMessage("Logged in successfully");
      setTimeout(() => {
        setToastSuccess(null);
        router.push("/dashboard");
      }, 150);
    } catch (error) {
      setError(error.message);
      setToastSuccess(false);
      setToastMessage("Login failed. Please check your email and password and try again.");
      setTimeout(() => {
        setToastSuccess(null);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };
  

  
  const handleForgotPassword = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handldResetPass = () => {};

  return (
    <>
      {toastSuccess !== null && (
        <Toast success={toastSuccess} message={toastMessage} />
      )}

      <div className="flex min-h-screen">
        <div className="w-1/2 bg-gray-800 flex justify-center items-center">
          <div className="text-center">
            <img src="/logo.png" alt="Brand Logo" className="mx-auto" />
          </div>
        </div>

        <div className="w-1/2 bg-white flex justify-center items-center">
          <div className="w-full max-w-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    placeholder="Email ID"
                    value={formData.userId}
                    onChange={handleChange}
                    className=" p-2 w-full"
                  />
                  <label htmlFor="userId" className="text-sm text-gray-500">
                    Email ID
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <PasswordInput
                  password={formData.password}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            {/* <p
              className="mt-4 text-blue-600 cursor-pointer"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </p> */}

            <div className="flex items-center justify-between mt-6">
              {/* <span>
                Don't have an account?{" "}
                <a href="/create-account" className="text-blue-600">
                  Sign Up
                </a>
              </span> */}
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 "
            onClick={handleCloseModal}
          />
          {/* Modal */}
          <div
            className="absolute bg-white p-6 shadow-md w-96 flex flex-col justify-center items-center rounded-lg"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 999,
            }}
          >
            <h2 className="text-lg font-semibold mb-4">Reset Password</h2>
            <form onSubmit={handldResetPass}>
              <div className="form-group mb-4">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Id"
                  value={formData.userId}
                  onChange={(e) => {
                    setRestPassMail(e.target.value);
                  }}
                  className="border p-2 w-full"
                  required
                />
                <label htmlFor="email" className="text-sm text-gray-500">
                  Email Id
                </label>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                >
                  Reset Password
                </button>
                <button
                  className="flex-1 bg-red-200 text-red-600 hover:bg-red-300 rounded-md py-2 focus:outline-none text-center"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Page;
