"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  isAdmin: false,
  admin: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", String(true));
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const admin = () => {
    setIsAdmin(true);
  };

  const value = {
    isLoggedIn,
    login,
    logout,
    isAdmin,
    admin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
