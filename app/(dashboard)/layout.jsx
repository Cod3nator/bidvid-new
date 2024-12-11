"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Dash_Navbar";

export default function DashboardLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      console.log("No access token");
      window.location.href = "/login"; 
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center animate-pulse text-lg text-gray-600">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="dash-layout bg-gray-100">
      <Navbar />
      {children}
    </div>
  );
}
