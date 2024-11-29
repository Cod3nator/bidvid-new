const refreshAccessToken = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/refresh-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh_token: getCookie("refresh_token"),
        }),
      });
  
      const data = await res.json();
      if (res.ok) {
        // Store the new access token
        document.cookie = `access_token=${data.access_token}; Secure; HttpOnly; Path=/; SameSite=Strict;`;
      } else {
        console.error("Failed to refresh access token");
      }
    } catch (error) {
      console.error("Error during token refresh", error);
    }
  };
  