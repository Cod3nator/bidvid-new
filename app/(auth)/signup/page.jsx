"use client";
import Toast from "../../../component/dashboard/Toast";
import PasswordInput from "../../../component/PasswordInput";
import moment from "moment";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userId: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSuccess, setToastSuccess] = useState(null);

  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "password" || name === "confirmPassword") {
      setPasswordMatchError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    // console.log(formData);

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }
    setPasswordMatchError(false);

    try {
      const response = await fetch("/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Sign-in failed");
      }
      localStorage.setItem("sessionToken", data.sessionToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      console.log("Sign-in successful:", data);
      setToastSuccess(true);
      setToastMessage("Sign In successful");
      setTimeout(() => {
        setToastSuccess(null);
        router.push("/dashboard");
      }, 500);
    } catch (error) {
      setError(error.message);
      setToastSuccess(false);
      setToastMessage(error.message || "Sign-in failed");
      setTimeout(() => {
        setToastSuccess(null);
      }, 5000);
      console.error("Sign-in failed:", error.message);
    } finally {
      setLoading(false);
    }
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
                    value={formData.name}
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
                    value={formData.email}
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
                    className="p-2 w-full"
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
                    className="p-2 w-full"
                    required
                  />
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm text-gray-500"
                  >
                    Confirm Password
                  </label>
                </div>
                {passwordMatchError && (
                  <small className="text-red-500">
                    Passwords do not match.
                  </small>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loading}>
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

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
