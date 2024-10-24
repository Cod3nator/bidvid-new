
"use client";
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import PasswordInput from '../../component/PasswordInput';

export default function ResetPassword() {
  const router = useRouter();


  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const searchParams= new useSearchParams();
  
  const email = searchParams.get('email'); 
  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
      const response = await fetch("/api/reset-password/set-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password }),
      });
  
      if (response.ok) {
        router.push("/login");
      } else {
        alert("Failed to set password");
      }

  };

  return (
    <div className='flex justify-center w-screen h-screen items-center'>
      <div className="container w-1/3">
      <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
      <form onSubmit={handleSubmit}>
 

      <div className="mb-6">
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 w-full"
                    required
                  />
                  <label
                    htmlFor="Password"
                    className="text-sm text-gray-500"
                  >
                     Password
                  </label>
                </div>
                </div>
              <div className="mb-6">
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                </div>
        <button type="submit" className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Reset Password</button>
      </form>
      {message && <p>{message}</p>}
      </div>
    </div>
  );
}
