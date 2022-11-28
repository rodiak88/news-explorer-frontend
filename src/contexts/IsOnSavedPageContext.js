import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const IsSavedPageContext = createContext();

const IsSavedPageContextProvider = ({ children }) => {
  const [isOnSavedPage, setIsOnSavedPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname === '/saved-news'
      ? setIsOnSavedPage(true)
      : setIsOnSavedPage(false);
  }, [location]);

  return (
    <IsSavedPageContext.Provider value={isOnSavedPage}>
      {children}
    </IsSavedPageContext.Provider>
  );
};

export default IsSavedPageContextProvider;

export const useIsSavedPage = () => {
  const isSavedPage = useContext(IsSavedPageContext);
  return { isSavedPage };
};
