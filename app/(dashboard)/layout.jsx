"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./components/Dash_Navbar";

export default function DashboardLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const router = useRouter();

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem("refresh_token");
    if (!refreshToken) {
      router.push("/login"); 
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/refresh-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refresh_token: refreshToken }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to refresh token");
      }

      const data = await response.json();
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      return data.access_token;
    } catch (error) {
      console.error("Error refreshing token:", error);
      router.push("/login");
    }
  };

  // Function to verify access token
  const verifyAccessToken = async () => {
    const accessToken = localStorage.getItem("access_token");

    // if (!accessToken) {
    //   router.push("/login"); 
    //   return;
    // }

    try {
      // const response = await fetch(
      //   `${process.env.NEXT_PUBLIC_BACKEND_API}/my-profile`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Authorization": `Bearer ${accessToken}`,
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );
      const response = {status : 200};
      if (response.status === 401) {
        const newAccessToken = await refreshToken();
        if (!newAccessToken) return;
        setIsAuthenticated(true);
      } else if (response.ok) {
        setIsAuthenticated(true);
      } else {
        throw new Error("Verification failed");
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      router.push("/login");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center animate-pulse text-lg text-gray-600">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="dash-layout" style={{ height: "100%", width: "100%" }}>
        <Navbar/>
      {children}
    </div>
  );
}
