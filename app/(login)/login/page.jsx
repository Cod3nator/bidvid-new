"use client";
import Toast from "../../../component/dashboard/Toast";
import PasswordInput from "../../../component/PasswordInput";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    email: "",
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
    router.push("/dashboard");

    // setLoading(true);
    // setError(null);
 
    // try{

    //   const res = await fetch("/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });
  
    //   const data = await res.json();
    //   if (!res.ok) {
    //     throw new Error(data.error || 'Login-in failed'); 
    //   }
    //   localStorage.setItem('sessionToken', data.sessionToken);
    //   localStorage.setItem('refreshToken', data.refreshToken);
    //   setToastSuccess(true); 
    //   setToastMessage("Login successful");
    //   setTimeout(() => {
    //     setToastSuccess(null); 
    //     router.push("/dashboard");
    //   }, 500);
    // }catch (error) {
    //   setError(error.message);
    //   setToastSuccess(false);  
    //   setToastMessage(error.message || "Login failed");
    //   setTimeout(() => {
    //     setToastSuccess(null);  
    //   }, 5000);
    //   console.error("Login failed:", error.message);
    // }finally{
    //   setLoading(false); 
    // }
  };

  const handleForgotPassword = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

 
  const handldResetPass =async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/reset-password/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: restPassMail }), 
      });

      if (response.ok) {
        router.push("/reset-password/?email=" + restPassMail);
      } else {
        alert("Email not found or request failed");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("An error occurred. Please try again.");
    }

    handleCloseModal();
  };


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
                    name="email"
                    placeholder="Email ID"
                    value={formData.userId}
                    onChange={handleChange}
                    className=" p-2 w-full"
                  />
                  <label htmlFor="userId" className="text-sm text-gray-500">
                    User ID
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
                disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <p
              className="mt-4 text-blue-600 cursor-pointer"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </p>

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
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={handleCloseModal}
          />
          {/* Modal */}
          <div
            className="absolute bg-white p-6 shadow-md w-96 flex flex-col justify-center items-center "
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
                  onChange={(e)=>{setRestPassMail(e.target.value)}}
                  className="border p-2 w-full"
                  required
                />
                <label htmlFor="email" className="text-sm text-gray-500">
                  Email Id
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Reset Password
              </button>
            </form>
            <button className="w-full mt-4 text-red-600 bg-red-200 hover:bg-red-300 rounded-md py-2" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Page;
