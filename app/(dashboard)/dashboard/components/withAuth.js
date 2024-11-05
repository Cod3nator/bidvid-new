import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const withAuth = (WrappedComponent) => {
  const ComponentWithAuth = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const checkAuth = async () => {
        const token = localStorage.getItem('sessionToken');

        if (!token) {
          router.push('/login');
          return;
        }

        try {
          const user = await fetch('/api/dashboard', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });

          const data = await user.json();
          console.log(data);
          localStorage.setItem('user', JSON.stringify(data.user));
          if (!data.user) {
            throw new Error('User not found');
          }

          setLoading(false);
        } catch (error) {
          console.error('Authentication failed', error);
          router.push('/login');
        }
      };

      checkAuth();
    }, [router]);
    

    if (loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  ComponentWithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
  return ComponentWithAuth;
};

export default withAuth;
