'use client';
import PasswordInput from '@/component/PasswordInput';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

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
    router.push('/dashboard');
  };

  const handleForgotPassword = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendLink = (e) => {
    e.preventDefault();
    // Here you would typically send the email to the server to handle the reset link
    console.log("Reset password link sent to:", email);
    handleCloseModal(); // Close the modal after sending
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
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="userId"
                    placeholder="User ID"
                    value={formData.userId}
                    onChange={handleChange}
                    className=" p-2 w-full"
                  />
                  <label htmlFor="userId" className="text-sm text-gray-500">User ID</label>
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
              >
                Log In
              </button>
            </form>

            <p className="mt-4 text-blue-600 cursor-pointer" onClick={handleForgotPassword}>
              Forgot Password?
            </p>

            <div className='flex items-center justify-between mt-6'>
              {/* <span>Or login with</span> */}
              <span>
                Don't have an account? <a href='/create-account' className="text-blue-600">Sign Up</a>
              </span>
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
    <div className="absolute bg-white p-6 shadow-md w-96 flex flex-col justify-center items-center " style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)',zIndex: 999 }}>
      <h2 className="text-lg font-semibold mb-4">Reset Password</h2>
      <form onSubmit={handleSendLink}>
        <div className="form-group mb-4">
          <input
            type="text"
            name="userId" 
            placeholder="User ID"
            value={formData.userId}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
          <label htmlFor="userId" className="text-sm text-gray-500">User ID</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Reset Link
        </button>
      </form>
      <button
        className="mt-4 text-red-600"
        onClick={handleCloseModal}
      >
        Close
      </button>
    </div>
  </>
)}


    </>
  );
}

export default Page;
