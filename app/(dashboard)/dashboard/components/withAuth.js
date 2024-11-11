import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react";

const withAuth = (WrappedComponent) => {
  const ComponentWithAuth = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const token = localStorage.getItem("sessionToken");
      const storedUser = localStorage.getItem("user");

      if (!token) {
        router.push("/login");
        return;
      }

      const checkAuth = async () => {
        if (storedUser) {
          setLoading(false);
          return;
        }

        try {
          const userResponse = await fetch("/api/dashboard", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          const data = await userResponse.json();
          if (!data.user) throw new Error("User not found");

          localStorage.setItem("user", JSON.stringify(data.user));
          setLoading(false);
        } catch (error) {
          console.error("Authentication failed", error);
          router.push("/login");
        }
      };

      checkAuth();
    }, [router]);

    if (loading) {
      return (
        <div className="h-screen flex items-center justify-center text-3xl text-indigo-600">
          Loading...
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  ComponentWithAuth.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;
  return ComponentWithAuth;
};

export default withAuth;
