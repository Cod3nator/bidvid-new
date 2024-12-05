// URL to your API endpoints
const API_URL = 'http://localhost:5000/api'; // Replace with your API URL

// Utility to get the access token and refresh token from localStorage
const getAccessToken = () => {
  return localStorage.getItem('accessToken') || '';
};

const getRefreshToken = () => {
  return localStorage.getItem('refreshToken') || '';
};

// Function to store the new tokens in localStorage
const setTokens = (accessToken, refreshToken) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

// Function to refresh the access token
const refreshToken = async () => {
  const refreshTokenValue = getRefreshToken();

  if (!refreshTokenValue) {
    throw new Error('No refresh token available');
  }

  try {
    const response = await fetch(`${API_URL}/refresh-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken: refreshTokenValue }),
      credentials: 'include', // Ensure cookies are sent with the request
    });

    if (!response.ok) {
      throw new Error('Failed to refresh token');
    }

    const data = await response.json();
    const { accessToken, refreshToken } = data;
    
    // Store the new tokens
    setTokens(accessToken, refreshToken);

    return accessToken;
  } catch (error) {
    console.error('Token refresh failed:', error);
    throw error;
  }
};

// Function to make a fetch request with automatic token refresh
const fetchWithAuth = async (url, options = {}) => {
  const accessToken = getAccessToken();

  // If there is no access token, throw an error
  if (!accessToken) {
    throw new Error('No access token found');
  }

  // Set the Authorization header with the access token
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(url, { ...options, headers });

    // If the response is 401 Unauthorized, attempt to refresh the token and retry the request
    if (response.status === 401) {
      const newAccessToken = await refreshToken(); // Refresh the token
      headers['Authorization'] = `Bearer ${newAccessToken}`; // Update the Authorization header

      // Retry the original request with the new token
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
