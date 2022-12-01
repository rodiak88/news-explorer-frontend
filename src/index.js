import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import IsSavedPageContextProvider from './contexts/IsOnSavedPageContext';
import AuthContextProvider from './contexts/AuthContext';
import { PopupsContextProvider } from './contexts/PopupsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <PopupsContextProvider>
          <IsSavedPageContextProvider>
            <App />
          </IsSavedPageContextProvider>
        </PopupsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
