import './Header.css';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import { useLocation } from 'react-router-dom';
import { usePopups } from '../../contexts/PopupsContext';

function Header() {
  const location = useLocation().pathname;
  const { isMobileNavOpen } = usePopups().popups.mobileNav;

  return (
    <header
      className={
        location === '/saved-news' ? 'header header__savednews' : 'header'
      }
    >
      <Navigation />
      {location === '/saved-news' ? (
        <SavedNewsHeader />
      ) : (
        <div
          className={`header__container ${
            isMobileNavOpen && 'header__container_nav-open'
          }`}
        >
          <h1 className='header__title'>What's going on in the world?</h1>
          <p className='header__text'>
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm />
        </div>
      )}
    </header>
  );
}

export default Header;
