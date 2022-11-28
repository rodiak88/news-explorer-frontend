import { useState, createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    email: 'rody@rody.com',
    name: 'Rodiak',
  });

  const history = useHistory();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser({});
    history.push('/');
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        currentUser,
        setCurrentUser,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { useAuth };
