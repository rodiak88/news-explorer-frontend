import React, { createContext, useContext } from 'react';
import {
  useSignInPopup,
  useSignUpPopup,
  useMessagePopup,
  useMobileNav,
} from '../hooks/usePopups';

const PopupsContext = createContext({});

export const PopupsContextProvider = ({ children }) => {
  const signInPopup = useSignInPopup();
  const signUpPopup = useSignUpPopup();
  const messagePopup = useMessagePopup();
  const mobileNav = useMobileNav();

  const popups = {
    signInPopup,
    signUpPopup,
    messagePopup,
    mobileNav,
  };

  const isAnyPopupOpen =
    signInPopup.isSignInPopupOpen ||
    signUpPopup.isSignUpPopupOpen ||
    messagePopup.isMessagePopupOpen ||
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
