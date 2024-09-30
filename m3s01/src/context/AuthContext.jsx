import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = () => {
    return user !== null;
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

export default AuthContext;