"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  isAdmin: false,
  admin: () => {},
  isPastEvent: false,
  pastEvent: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPastEvent, setIsPastEvent] = useState(false);

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

  const pastEvent = () => {
    setIsPastEvent(true);
  };

  const value = {
    isLoggedIn,
    login,
    logout,
    isAdmin,
    admin,
    isPastEvent,
    pastEvent,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
