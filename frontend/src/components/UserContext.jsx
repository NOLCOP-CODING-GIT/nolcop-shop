import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const isLogged = localStorage.getItem("userLoggedIn") === "true";
    setUserLoggedIn(isLogged);
  }, []);

  return (
    <AuthContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
