"use client";

import { createContext, useState, useContext } from "react";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState({});

  return (
    <UserContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);



