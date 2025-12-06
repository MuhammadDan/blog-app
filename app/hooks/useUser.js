// hooks/useUser.js
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';  // ← FIXED

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('accessToken='))
      ?.split('=')[1];

    if (token) {
      try {
        const decoded = jwtDecode(token); 
        setUser({
          fullname: decoded.fullname,
          email: decoded.email,
          initial: decoded.fullname?.charAt(0).toUpperCase() || 'U',
        });
      } catch (err) {
        console.error("Failed to decode token:", err);
      }
    }

    setLoading(false);
  }, []);

  return { user, loading };
};
