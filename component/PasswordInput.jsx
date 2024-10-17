import { useState } from "react";

const PasswordInput=({ password, onChange})=> {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const passwordIcons = [
    {
      see: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-eye"
        >
          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      hide: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-eye-off"
        >
          <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
          <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
          <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
          <path d="m2 2 20 20" />
        </svg>
      ),
    },
  ];

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="form-group">
   
            <input
        type={isPasswordVisible ? "text" : "password"}
        name="password"
        placeholder="Password"
        value={password}  
        onChange={onChange}
      />

      <label htmlFor="password">Password</label>
      <span className="password-icon" onClick={togglePasswordVisibility}>
        {isPasswordVisible ?   passwordIcons[0].see :passwordIcons[1].hide}
      </span>
    </div>
  );
}




export default PasswordInput;