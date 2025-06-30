import { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the context
export const AuthContext = createContext();

// 2. AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);    
  const [role,setRole]=useState(null);     
  const [token, setToken] = useState(null);  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 3. Check localStorage on mount to auto-login if token exists
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    const storedRole = localStorage.getItem('role');
    if (storedToken) {
      setToken(storedToken);
      setRole(storedRole);
      setIsAuthenticated(true);
      if (storedUser) setUser(JSON.parse(storedUser));
    }
  }, []);

  // 4. Login: save token and user
  const login = ({ token, user,role }) => {
    setToken(token);
    setUser(user);
    setRole(role);
    setIsAuthenticated(true);

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('role',role);
  };

  // 5. Logout: clear everything
  const logout = () => {
    setToken(null);
    setUser(null);
    setRole(null);
    setIsAuthenticated(false);

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
  };

  return (
    <AuthContext.Provider
      value={{ user,role, token, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 6. useAuth: Hook to use context
export const useAuth = () => useContext(AuthContext);
