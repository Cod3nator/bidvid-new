import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Toast from "../../../../component/dashboard/Toast";

const ResetPasswordForm = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastSuccess, setToastSuccess] = useState(null);
  
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setToastMessage("Passwords do not match");
      setToastSuccess(false);
      return;
    } else {
      setToastSuccess(true);
      setToastMessage("Password match successfully");
    }

    try {
      const response = await fetch("/api/reset-password/set-pass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push("/login");
      } else {
        const data = await response.json();
        setToastMessage(data.message || "Failed to set password");
        setToastSuccess(false);
      }
    } catch (error) {
      setToastMessage("An error occurred. Please try again.");
      setToastSuccess(false);
    }
  }

  return (
    <>
      {toastMessage && <Toast success={toastSuccess} message={toastMessage} />}
      <div className="flex min-h-screen">
        <div className="w-1/2 bg-gray-800 flex justify-center items-center">
          <div className="text-center">
            <img src="/logo.png" alt="Brand Logo" className="mx-auto" />
          </div>
        </div>

        <div className="w-1/2 bg-white flex justify-center items-center">
          <div className="w-full max-w-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Reset Password
            </h2>
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
                  <label htmlFor="Password" className="text-sm text-gray-500">
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
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordForm;
