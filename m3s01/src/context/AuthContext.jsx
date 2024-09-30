import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const validateToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser(token);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, validateToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;