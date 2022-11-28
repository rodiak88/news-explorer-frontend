import './Footer.css';
import React from 'react';
import fbIcon from '../../images/fb_icon.svg';
import gitIcon from '../../images/github_icon.svg';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>
        © {new Date().getFullYear()} Supersite, Powered by News API
      </p>
      <nav className='footer__nav'>
        <ul className='footer__links-list'>
          <li className='footer__links-item'>
            <a className='footer__link' href='/'>
              Home
            </a>
          </li>
          <li className='footer__links-item'>
            <a
              className='footer__link'
              href='https://practicum.com/'
              target='_blank'
              rel='noreferrer'
            >
              Practicum
            </a>
          </li>
        </ul>
        <ul className='footer__social'>
          <li className='footer__social-item'>
            <a
              href='https://github.com/rodiak88'
              target='_blank'
              className='footer__link'
              rel='noreferrer'
            >
              <img
                src={gitIcon}
                className='footer__social-icon'
                alt='GitHub icon'
              />
            </a>
          </li>
          <li className='footer__social-item'>
            <a
              href='https://www.facebook.com/TheHobbit'
              target='_blank'
              className='footer__link'
              rel='noreferrer'
            >
              <img
                src={fbIcon}
                className='footer__social-icon'
                alt='Facebook icon'
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
