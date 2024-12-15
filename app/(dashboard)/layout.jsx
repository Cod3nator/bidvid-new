"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Navbar from "./components/Dash_Navbar";

const backend_api = "https://devapi.bidvid.in";

export default function DashboardLayout({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        console.log("No access token");
        router.push("/login");
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
          throw new Error("Failed to fetch user details");
        }

        const data = await response.json();
        setUser(data.data);

        const userRole = data.data.roles.length > 0 ? data.data.roles[0].name : null;
        setRole(userRole);

      } catch (error) {
        console.error("Error fetching user details:", error);
        router.push("/login");
      } finally {
        setIsLoading(false); 
      }
    };

    fetchUserDetails();
  }, [router]);

  useEffect(() => {
    if (role) { 
      if (role === "super-admin") {
        if (pathname === "/") {
          router.push("/contact-list");
        } else if (pathname === "/dashboard") {
          router.push("/super-admin");
        }
      }
    }
  }, [role, pathname, router]); 

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center animate-pulse text-lg text-gray-600">
          Loading...
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="dash-layout bg-gray-100">
      <Navbar user={user} role={role} />
      {children}
    </div>
  );
}
