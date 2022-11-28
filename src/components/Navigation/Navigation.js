import React, { useEffect } from 'react';
import './Navigation.css';
import { useLocation } from 'react-router-dom';
import lightLogo from '../../images/logo_light.svg';
import darkLogo from '../../images/logo_dark.svg';
import logoutIconLight from '../../images/logout_icon_light.svg';
import logoutIconDark from '../../images/logout_icon_dark.svg';
import { Link, NavLink } from 'react-router-dom';
import { useIsSavedPage } from '../../contexts/IsOnSavedPageContext';
import { useAuth } from '../../contexts/AuthContext';
import Popup from '../Popup/Popup';
import { usePopups } from '../../contexts/PopupsContext';

function Navigation() {
  const { isSavedPage } = useIsSavedPage();
  const { isLoggedIn, currentUser, handleLogout } = useAuth();
  const { isMobileNavOpen, openMobileNav, closeMobileNav } =
    usePopups().popups.mobileNav;
  const { openSignInPopup } = usePopups().popups.signInPopup;
  const { isAnyPopupOpen } = usePopups();

  const location = useLocation().pathname;

  useEffect(() => {
    closeMobileNav();
  }, [location]);

  function handleHamburgerMenuClick() {
    isMobileNavOpen ? closeMobileNav() : openMobileNav();
  }

  function handleMobileSignInClick() {
    closeMobileNav();
    openSignInPopup();
  }

  return (
    <>
      <div
        className={`${isSavedPage ? 'nav nav__type_dark' : 'nav'} ${
          isMobileNavOpen && 'nav__type_mobile'
        }`}
      >
        <Link to='/' className='nav__logo-link'>
          <img
            src={isSavedPage && !isMobileNavOpen ? darkLogo : lightLogo}
            className='nav__logo'
            alt='NewsExplorer logo'
          />
        </Link>
        <button
          className={`${
            isSavedPage
              ? 'nav__mobile-hamburger-btn nav__mobile-hamburger-btn_type_dark'
              : 'nav__mobile-hamburger-btn'
          } ${isAnyPopupOpen && 'nav__mobile-hamburger-btn_inactive'}`}
          onClick={handleHamburgerMenuClick}
        />
        <nav className='nav__wrapper'>
          <ul className='nav__menu'>
            <li className='nav__link-item'>
              <NavLink
                exact
                to='/'
                className={
                  isSavedPage ? 'nav__link nav__link_dark' : 'nav__link'
                }
                activeClassName={
                  isSavedPage
                    ? 'nav__link_active nav__link_dark_active'
                    : 'nav__link_active'
                }
              >
                Home
              </NavLink>
            </li>
            {isLoggedIn && (
              <li className='nav__link-item'>
                <NavLink
                  to='/saved-news'
                  className={
                    isSavedPage ? 'nav__link nav__link_dark' : 'nav__link'
                  }
                  activeClassName={
                    isSavedPage
                      ? 'nav__link_active nav__link_dark_active'
                      : 'nav__link_active'
                  }
                >
                  Saved articles
                </NavLink>
              </li>
            )}
          </ul>
          <button
            className={`nav__btn ${isLoggedIn && 'nav__btn_type_logged'} ${
              isSavedPage && 'nav__btn_dark'
            }`}
            onClick={isLoggedIn ? handleLogout : openSignInPopup}
          >
            {isLoggedIn ? (
              <div className='nav__user-info'>
                {currentUser.name}{' '}
                <img
                  src={isSavedPage ? logoutIconDark : logoutIconLight}
                  className='nav__user-logout'
                  alt='Logout icon'
                />
              </div>
            ) : (
              'Sign in'
            )}
          </button>
        </nav>

        <Popup
          isOpen={isMobileNavOpen}
          name='mobile-nav'
          onClose={handleHamburgerMenuClick}
        >
          <nav className='nav__mobile-nav'>
            <ul className='nav__mobile-menu'>
              <li className='nav__mobile-menu-item'>
                <NavLink exact to='/' className='nav__mobile-nav-link'>
                  Home
                </NavLink>
              </li>
              {isLoggedIn && (
                <li className='nav__mobile-nav-item'>
                  <NavLink
                    exact
                    to='/saved-news'
                    className='nav__mobile-nav-link'
                  >
                    Saved articles
                  </NavLink>
                </li>
              )}
            </ul>
            <button
              className={`nav__btn ${
                isLoggedIn && 'nav__btn_type_logged'
              } nav__mobile-nav-btn`}
              onClick={isLoggedIn ? handleLogout : handleMobileSignInClick}
            >
              {isLoggedIn ? (
                <div className='nav__user-info'>
                  {currentUser.name}{' '}
                  <img
                    src={
                      isSavedPage && !isMobileNavOpen
                        ? logoutIconDark
                        : logoutIconLight
                    }
                    className='nav__user-logout'
                    alt='Logout icon'
                  />
                </div>
              ) : (
                'Sign in'
              )}
            </button>
          </nav>
        </Popup>
      </div>
    </>
  );
}

export default Navigation;
