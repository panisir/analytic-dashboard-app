// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getCurrentUser, login as authLogin, logout as authLogout } from '../services/AuthService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getCurrentUser());

  const login = async (username, password) => {
    const user = await authLogin(username, password);
    setCurrentUser(user);
  };

  const logout = () => {
    authLogout();
    setCurrentUser(null);
  };

  useEffect(() => {
    setCurrentUser(getCurrentUser());
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
