"use client";

import React, { useEffect, useState, useMemo } from "react";
import { EyeOff, Eye } from "lucide-react";
import Toast from "@/component/dashboard/Toast";
import { ArrowLeft } from "lucide-react";
import { toast } from "react-toastify";
const backend_api = "https://devapi.bidvid.in";

const Navbar = () => {
  const [user, setUser] = useState({
    first_name: "Loading",
    last_name: "User",
    email: "loading@example.com",
    roles: [{ name: "" }],
  });
  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [isClicked, setClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [oldPassword, setOldPassword] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSuccess, setToastSuccess] = useState(null);

  
  
  const getUser = async () => {
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      console.error("Access token not found!");
      return;
    }

    try {
      const response = await fetch(`${backend_api}/my-profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch user data: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const fetchUser = async () => {
    const data = await getUser();
    if (data) {
      setUser(data.data);
    }
  };
useEffect(() => {
  fetchUser();
},[])
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const togglePasswordModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "confirm_password" && value !== formData.new_password) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      console.error("Access token not found!");
      return;
    }

    try {
      const response = await fetch(`${backend_api}/my-profile/password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success === false) {
        toast.error(data.message, { autoClose: false });
        toast.error(data.errors.new_password[0], { autoClose: false });
        return;
      }
      toast.success(data.message, { autoClose: 1000 });
      togglePasswordModal();
      setFormData({
        current_password: "",
        new_password: "",
        confirm_password: "",
      });
    } catch (error) {
      toast.error("Failed to change the password", { autoClose: false });
      console.error("Error changing password:", error);
    }
  };

  const hasSuperAdminRole = useMemo(() => {
    return user.roles.some((role) => role.name === "super-admin");
  }, [user.roles]);

  const { first_name, last_name, email, roles } = user;
  const name = `${first_name} ${last_name}`;
  const firstChar = first_name.charAt(0).toUpperCase();
  useEffect(() => {
    if (roles && roles.length > 0) {
      const roleNames = roles.map((role) => role.name); 
      localStorage.setItem("roles", roleNames.join(",")); 
    }
  }, [roles]);

  return (
    <>
      <nav className="flex items-center justify-between bg-gray-900 p-4 mb-8">
        <div className="text-white font-bold text-xl">
          <a href="/dashboard">
            <img src="/logo.png" alt="Brand Logo" className="h-12 w-auto" />
          </a>
        </div>
        <div className="flex items-center space-x-16">
          <menu className="flex items-center space-x-4">
            <a href="/users" className="text-white hover:text-blue-400">
              Users
            </a>
            {hasSuperAdminRole && (
              <a href="/contact-list" className="text-white hover:text-blue-400">
                Contacts
              </a>
            )}
          </menu>
          <div className="relative">
            <div
              className="flex items-center justify-center bg-red-100 h-10 w-10 rounded-full border-2 border-white cursor-pointer"
              onClick={() => setClicked((prev) => !prev)}
            >
              {firstChar}
            </div>
            {isClicked && (
              <div
                className="absolute space-y-2 w-72 bg-white p-6 rounded-md shadow-lg border"
                style={{ top: "100%", right: "0" }}
              >
                <p className="font-bold text-lg">{name}</p>
                <p className="text-sm text-gray-600">{email}</p>
                {roles.length > 0 && (
                  <p className="mt-2 text-sm text-gray-700">
                    Roles: {roles.map((role) => role.name).join(", ")}
                  </p>
                )}
                <hr className="my-2" />
                <button
                  onClick={() => {
                    togglePasswordModal();
                    setClicked(false);
                  }}
                  className="w-full text-sm text-blue-600 bg-gray-100 py-1 rounded-md hover:bg-blue-100"
                >
                  Change Password
                </button>
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
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"  onClick={togglePasswordModal}/>
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
              {!oldPassword && (
                <>
                <div className="form-group relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="current_password"
                    placeholder="Current Password"
                    value={formData.current_password}
                    onChange={handlePasswordChange}
                    className="p-2 w-full border placeholder:text-gray-400"
                    required
                  />
                  <label htmlFor="new_password">Current Password</label>
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute inset-y-0 right-2 text-gray-500 text-sm focus:outline-none"
                  >
                    {passwordVisible ? <EyeOff /> : <Eye />}
                  </button>
                </div>
                <button
                onClick={()=>{
                  if(formData.current_password){
                    setOldPassword(true)
                  }else{
                    setOldPassword(false)
                  }
                }}
                className="bg-blue-600 text-white py-2 rounded-md w-full"
              >
                Change Password
              </button>
                </>
              )}
              {oldPassword && (
                <>
                     <span className="p-4" onClick={()=>setOldPassword(false)}> <ArrowLeft /></span>
                  <div className="mb-6">
                    <div className="form-group relative">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        name="new_password"
                        placeholder="New Password"
                        value={formData.new_password}
                        onChange={handlePasswordChange}
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
                        onChange={handlePasswordChange}
                        className="p-2 w-full border placeholder:text-gray-400"
                        required
                      />
                      <label htmlFor="confirm_password">Confirm Password</label>
                    </div>
                    {passwordMatchError && (
                      <small className="text-red-500">
                        Passwords do not match.
                      </small>
                    )}
                  </div>
                  <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded-md w-full"
                disabled={passwordMatchError}
              >
                Set Password
              </button>
                </>
              )}
             
            </form>
          </div>
        </>
      )}

      {toastSuccess && (
        <Toast success={toastSuccess} message={toastMessage} />
      )}
    </>
  );
};

export default Navbar;
