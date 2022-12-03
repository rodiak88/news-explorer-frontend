import { useState, createContext, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import mainApi from '../utils/MainApi';
import { usePopups } from './PopupsContext';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    email: '',
    name: '',
  });
  const [savedArticles, setSavedArticles] = useState([]);
  const [authServerError, setAuthServerError] = useState('');

  const history = useHistory();

  const { closeSignUpPopup } = usePopups().popups.signUpPopup;
  const { closeSignInPopup } = usePopups().popups.signInPopup;
  const { openMessagePopup } = usePopups().popups.messagePopup;

  function onRegister({ email, password, name }) {
    setAuthServerError('');
    mainApi
      .register(email, password, name)
      .then((res) => {
        closeSignUpPopup();
        openMessagePopup();
      })
      .catch((err) => {
        if (err.status === 409) {
          setAuthServerError('This email is not available.');
        } else {
          console.log(err);
          setAuthServerError('Registration error. Please try again later.');
        }
      });
  }

  function onLogin({ email, password }) {
    mainApi
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          setIsLoggedIn(true);
          setCurrentUser(res.data);
          localStorage.setItem('jwt', res.token);
          closeSignInPopup();
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          setAuthServerError('Incorrect email or password.');
        } else {
          console.log(err);
          setAuthServerError('Login error. Please try again later.');
        }
      });
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          if (res) {
            setCurrentUser(res.data);
            setIsLoggedIn(true);
            setSavedArticles();
          } else {
            localStorage.removeItem('jwt');
          }
        })
        .catch((err) => console.log(err));
    }
  }, [history]);

  function changeAuthError(error) {
    setAuthServerError(error);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
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
        onRegister,
        onLogin,
        authServerError,
        handleLogout,
        changeAuthError,
        savedArticles,
        setSavedArticles,
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
