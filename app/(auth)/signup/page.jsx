"use client";
import { validateName } from "@/utils/validationFunction";
import Toast from "../../../component/dashboard/Toast";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { EyeOff, Eye, BadgeAlert } from "lucide-react";
import { toast } from "react-toastify";
const backend_api = "https://devapi.bidvid.in";
const Page = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setLoading(false);
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "first_name" || name === "last_name"
          ? value.charAt(0).toUpperCase() + value.slice(1)
          : value,
    }));

    if (name === "password") {
      const isStrongPassword = /^[A-Za-z\d]{8,}$/.test(value);

      const isTooShort = value.length < 8;

      if (!isStrongPassword) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }

      if (isTooShort) {
        setPasswordError(false);
      }
    }
    if (name === "confirm_password" && formData.password !== value) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (formData.password !== formData.confirm_password) {
      setPasswordMatchError(true);
      return;
    }
    setPasswordMatchError(false);

    try {
      const response = await fetch(`${backend_api}/sign-up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Sign-up failed");
      }
      toast.success("Sign-up successful");
      router.push("/login");
    } catch (error) {
      setError(error.message);
      toast.error(error.message, { autoClose: false });
      toast.error("Sign-up failed");
      console.error("Sign-up failed:", error.message);
    } finally {
      setLoading(false);
    }
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
                    name="first_name"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={handleChange}
                    onInput={validateName}
                    className="p-2 w-full"
                    required
                  />
                  <label htmlFor="first_name" className="text-sm text-gray-500">
                    First Name
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={formData.last_name}
                    onChange={handleChange}
                    onInput={validateName}
                    className="p-2 w-full"
                    required
                  />
                  <label htmlFor="last_name" className="text-sm text-gray-500">
                    Last Name
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

              <div className="mb-6">
                <div className="form-group relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`p-2 w-full border ${
                      passwordError ? "border-red-500" : "border-gray-300"
                    } placeholder:text-gray-400`}
                    required
                  />
                  <label htmlFor="password">Password</label>
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute inset-y-0 right-2 text-gray-500 text-sm focus:outline-none"
                  >
                    {passwordVisible ? <EyeOff /> : <Eye />}
                  </button>
                </div>
                {formData.password.length > 0 && (
                  <ul>
                    <li
                      className={`flex items-center text-sm mt-2 ${
                        passwordError
                          ? "text-red-500"
                          : formData.password.length < 8
                          ? "text-yellow-500"
                          : "text-green-500"
                      }`}
                    >
                      <BadgeAlert size={20} strokeWidth={1} className="mr-2" />
                      {passwordError
                        ? "The password mayThe password may only contain letters, numbers, and dashes."
                        : formData.password.length < 8
                        ? "Password must be at least 8 characters."
                        : "Strong Password."}
                    </li>
                  </ul>
                )}
              </div>
              <div className="mb-6">
                <div className="form-group">
                  <input
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    className="p-2 w-full"
                    required
                  />
                  <label
                    htmlFor="confirm_password"
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
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
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
