
// UserContext.js
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const loginUser = async (username, password) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "kminchelle",
          password: "0lelplR",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        throw new Error("Invalid username or password");
        // alert('Invalid username or password');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const logoutUser = () => {
    setUser(null);
  };

  return <UserContext.Provider value={{ user, error, loginUser, logoutUser }}>{children}</UserContext.Provider>;
};
