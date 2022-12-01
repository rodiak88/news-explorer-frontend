import './NewsCard.css';
import React from 'react';
import { useIsSavedPage } from '../../contexts/IsOnSavedPageContext';
import { useAuth } from '../../contexts/AuthContext';

function NewsCard({ card }) {
  const { isSavedPage } = useIsSavedPage();
  const { isLoggedIn } = useAuth();

  return (
    <li
      className='card'
      onClick={() => {
        window.open(card.link, '_blank', 'noopener,noreferrer');
      }}
    >
      <div
        className='card__image'
        style={{ backgroundImage: `url(${card.image})` }}
      >
        {isSavedPage && <p className='card__keyword'>{card.keyword}</p>}

        <div className='card__button-container'>
          <button
            className={`card__button ${
              isSavedPage
                ? 'card__button_type_delete'
                : `${
                    card.isSaved
                      ? 'card__button_type_bookmark_marked'
                      : 'card__button_type_bookmark'
                  }`
            }`}
          >
            {' '}
          </button>
          <p
            className={`${
              isLoggedIn && !isSavedPage
                ? 'card__tooltip_inactive'
                : 'card__tooltip'
            }`}
          >
            {isSavedPage ? 'Remove from saved' : 'Sign in to save articles'}
          </p>
        </div>
      </div>
      <div className='card__text-container'>
        <p className='card__date'>{card.date}</p>
        <h2 className='card__title'>{card.title}</h2>
        <p className='card__text'>{card.text}</p>
      </div>
      <p className='card__source'>{card.source}</p>
    </li>
  );
}

export default NewsCard;
