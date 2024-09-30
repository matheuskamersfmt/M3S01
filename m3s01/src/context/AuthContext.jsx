import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const login = async (email, password) => {
    try {
      const response = await fetch('/users.json');
      const users = await response.json();

      const userData = users.find(user => user.email === email && user.password === password);

      if (userData) {
        localStorage.setItem('token', userData.token);
        setUser(userData);
        setIsAuthenticated(true);
        navigate('/');
      } else {
        alert('Usuário ou senha inválidos');
      }
    } catch (error) {
      console.error('Erro ao autenticar:', error);
      alert('Erro ao autenticar. Tente novamente.');
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
  };

  const validateToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token });
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    validateToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;