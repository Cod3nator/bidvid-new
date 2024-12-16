'use client'
import React, {  useState } from "react";
import { EyeOff, Eye } from 'lucide-react';
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
const backend_api = "https://devapi.bidvid.in";

const ChangePass = () => {
  const [formData, setFormData] = useState({
    new_password: "",
    confirm_password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "confirm_password" && formData.new_password !== value) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (formData.new_password !== formData.confirm_password) {
      setPasswordMatchError(true);
      return;
    }

    if (!token) {
      console.error("No token found in URL.");
      toast.error("No token found in URL.",{autoClose:false});
      return;
    }

    try {
      const response = await fetch(`${backend_api}/change-password/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          new_password: formData.new_password,
          confirm_password: formData.confirm_password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to change the password",{autoClose:false});
        console.error("Error changing password:", errorData);
      } else {
        toast.success("Password changed successfully.",{autoClose:1000});
        router.push("/login");
        setFormData({ new_password: "", confirm_password: "" });
      }
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error("Failed to change the password",{autoClose:false});
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center z-50" />
      <div className="p-8">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div
        className="absolute bg-white p-6 shadow-lg w-96 flex flex-col justify-center items-center rounded-lg"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 999,
        }}
      >
        <h2 className="text-lg font-semibold mb-4">Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          {/* New Password Input */}
          <div className="mb-6">
            <div className="form-group relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="new_password"
                placeholder="New Password"
                value={formData.new_password}
                onChange={handleChange}
                className="p-2 w-full border placeholder:text-gray-400"
                required
              />
              <label htmlFor="new_password">Password</label>
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-2 text-gray-500 text-sm focus:outline-none"
              >
                {passwordVisible ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>
          <div className="mb-6">
            <div className="form-group">
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                value={formData.confirm_password}
                onChange={handleChange}
                className="p-2 w-full border placeholder:text-gray-400"
                required
              />
               <label htmlFor="confirm_password">Confirm Password</label>
            </div>
            {passwordMatchError && (
              <small className="text-red-500">Passwords do not match.</small>
            )}
          </div>
          <div className="flex justify-center items-center space-x-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
            >
              Set Password
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePass;
