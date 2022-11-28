import { useState } from 'react';

const useSignInPopup = () => {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const openSignInPopup = () => setIsSignInPopupOpen(true);
  const closeSignInPopup = () => setIsSignInPopupOpen(false);
  return { isSignInPopupOpen, openSignInPopup, closeSignInPopup };
};

const useSignUpPopup = () => {
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const openSignUpPopup = () => setIsSignUpPopupOpen(true);
  const closeSignUpPopup = () => setIsSignUpPopupOpen(false);
  return { isSignUpPopupOpen, openSignUpPopup, closeSignUpPopup };
};

const useMobileNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const openMobileNav = () => setIsMobileNavOpen(true);
  const closeMobileNav = () => setIsMobileNavOpen(false);
  return { isMobileNavOpen, openMobileNav, closeMobileNav };
};

export { useSignInPopup, useSignUpPopup, useMobileNav };
