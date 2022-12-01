import React, { createContext, useContext } from 'react';
import {
  useSignInPopup,
  useSignUpPopup,
  useMobileNav,
} from '../hooks/usePopups';

const PopupsContext = createContext({});

export const PopupsContextProvider = ({ children }) => {
  const signInPopup = useSignInPopup();
  const signUpPopup = useSignUpPopup();
  const mobileNav = useMobileNav();

  const popups = {
    signInPopup,
    signUpPopup,
    mobileNav,
  };

  const isAnyPopupOpen =
    signInPopup.isSignInPopupOpen ||
    signUpPopup.isSignUpPopupOpen ||
    mobileNav.isMobileNavOpen;

  return (
    <PopupsContext.Provider value={{ popups, isAnyPopupOpen }}>
      {children}
    </PopupsContext.Provider>
  );
};

export const usePopups = () => {
  const context = useContext(PopupsContext);
  return context;
};
