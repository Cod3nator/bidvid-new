// utils/auth.js

const getAccessToken = () => {
    return localStorage.getItem('accessToken'); // Temporarily store access token in memory
  };
  
  const setAccessToken = (token) => {
    localStorage.setItem('accessToken', token);
  };
  
  const refreshAccessToken = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/refresh-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setAccessToken(data.accessToken);
        return data.accessToken;
      } else {
        throw new Error("Unable to refresh token");
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      throw error;
    }
  };
  
  export const fetchWithAuth = async (url, options = {}) => {
    let accessToken = getAccessToken();
  
    const response = await fetch(url, {
      method: options.method || "GET",
      headers: {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      },
      body: options.body ? JSON.stringify(options.body) : null,
    });
  
    if (!response.ok && response.status === 401) {
      accessToken = await refreshAccessToken();
      const retryResponse = await fetch(url, {
        method: options.method || "GET",
        headers: {
          ...options.headers,
          Authorization: `Bearer ${accessToken}`,
        },
        body: options.body ? JSON.stringify(options.body) : null,
      });
  
      return retryResponse.json();
    }
  
    return response.json();
  };
  