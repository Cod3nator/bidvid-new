const API_URL = 'http://localhost:5000/api';
const backend_api = "https://devapi.bidvid.in";
const getAccessToken = () => {
  return localStorage.getItem('access_token') || '';
};

const getRefreshToken = () => {
  return localStorage.getItem('refresh_token') || '';
};

const setTokens = (accessToken, refreshToken) => {
  console.log(accessToken,refreshToken);
  
  localStorage.setItem('access_token', accessToken);
  // localStorage.setItem('refresh_token_s', refreshToken);
  localStorage.setItem('refresh_token', refreshToken);
};
const refreshToken = async () => {
  console.log("Fetching new refresh and access tokens");

  const refreshTokenValue = localStorage.getItem("refresh_token");
  if (!refreshTokenValue) {
    console.error("No refresh token available");
    throw new Error("No refresh token available");
  }

  try {
    const response = await fetch(`${backend_api}/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh_token: refreshTokenValue }),
    });

    if (!response.ok) {
      // Handle HTTP errors
      throw new Error(`Failed to refresh token: ${response.status}`);
    }

    const data = await response.json();
    const { access_token, refresh_token } = data;

    if (!access_token || !refresh_token) {
      throw new Error("Invalid token response");
    }

    setTokens(access_token, refresh_token);
    return data;
  } catch (error) {
    console.error("Token refresh failed:", error);
    throw error;
  }
};


const fetchWithAuth = async (url, options = {}) => {
  const accessToken = getAccessToken();

  if (!accessToken) {
    throw new Error('No access token found');
  }

  const headers = {
    ...options.headers,
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(url, { ...options, headers });

    if (response.status === 401) {
      const newAccessToken = await refreshToken(); 
      headers['Authorization'] = `Bearer ${newAccessToken}`; 

      const retryResponse = await fetch(url, { ...options, headers });
      
      if (!retryResponse.ok) {
        throw new Error('Failed to fetch data after token refresh');
      }

      return retryResponse.json();
    }

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Fetch failed:', error);
    throw error;
  }
};

export { fetchWithAuth, refreshToken, setTokens };
