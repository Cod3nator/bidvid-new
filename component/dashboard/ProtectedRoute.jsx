import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";


const withProtectedRoute = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const accessToken = localStorage.getItem('access_token');
      const refreshToken = localStorage.getItem('refresh_token');

      if (!accessToken || !refreshToken) {
        router.push('/login');
      } else {
        setLoading(false); 
      }
    }, [router]);


    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 border-4 border-t-4 border-gray-700 border-solid rounded-full animate-spin"></div>
                <span className="text-xl text-gray-700 animate-pulse">Loading...</span>
              </div>
            </div>
          );          
    }
    return <WrappedComponent {...props} />;
  };
};

export default withProtectedRoute;
