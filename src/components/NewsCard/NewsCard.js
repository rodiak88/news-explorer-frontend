import './NewsCard.css';
import { useEffect, useState } from 'react';
import { useIsSavedPage } from '../../contexts/IsOnSavedPageContext';
import { useAuth } from '../../contexts/AuthContext';
import { localizeDate } from '../../utils/utils';
import defaultCardImage from '../../images/default_card_image.jpg';
import { usePopups } from '../../contexts/PopupsContext';
import { useArticles } from '../../contexts/ArticlesContext';

function NewsCard({ card }) {
  const { isSavedPage } = useIsSavedPage();
  const { isLoggedIn } = useAuth();
  const [formattedCard, setFormattedCard] = useState({});
  const { keyword, handleSaveArticle, isArticleSaved, handleDeleteArticle } =
    useArticles();
  const { openSignInPopup } = usePopups().popups.signInPopup;

  useEffect(() => {
    if (!isSavedPage) {
      setFormattedCard({
        title: card.title,
        text: card.description,
        date: localizeDate(card.publishedAt),
        source: card.source.name,
        link: card.url,
        image: card.urlToImage,
        keyword: keyword,
      });
    } else {
      setFormattedCard(card);
    }
  }, [card, isSavedPage]);

  function onBookmarClick(e) {
    e.stopPropagation();
    if (!isLoggedIn) {
      openSignInPopup();
      return;
    }
    if (isArticleSaved(formattedCard)) {
      handleDeleteArticle(isArticleSaved(formattedCard));
    } else {
      handleSaveArticle(formattedCard);
    }
  }

  function onDeleteClick(e) {
    e.stopPropagation();
    handleDeleteArticle(card);
  }

  return (
    <li
      className='card'
      onClick={() => {
        window.open(formattedCard.link, '_blank', 'noopener,noreferrer');
      }}
    >
      <div
        className='card__image'
        style={{
          backgroundImage: `url(${
            formattedCard.image === undefined
              ? defaultCardImage
              : formattedCard.image
          })`,
        }}
      >
        {isSavedPage && (
          <p className='card__keyword'>{formattedCard.keyword}</p>
        )}

        <div className='card__button-container'>
          <button
            className={`card__button ${
              isSavedPage
                ? 'card__button_type_delete'
                : `${
                    isArticleSaved(formattedCard)
                      ? 'card__button_type_bookmark_marked'
                      : 'card__button_type_bookmark'
                  }`
            }`}
            onClick={isSavedPage ? onDeleteClick : onBookmarClick}
          />

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
        <p className='card__date'>{formattedCard.date}</p>
        <h2 className='card__title'>{formattedCard.title}</h2>
        <p className='card__text'>{formattedCard.text}</p>
      </div>
      <p className='card__source'>{formattedCard.source}</p>
    </li>
  );
}

export default NewsCard;
