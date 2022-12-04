import './NewsCardList.css';
import { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { useIsSavedPage } from '../../contexts/IsOnSavedPageContext';
import { useArticles } from '../../contexts/ArticlesContext';

function NewsCardList({ ...props }) {
  const [cardsToDisplay, setCardsToDisplay] = useState(3);
  const { isSavedPage } = useIsSavedPage();
  const { articles, savedArticles } = useArticles();

  function handleShowMoreClick() {
    setCardsToDisplay((cardsToDisplay) => (cardsToDisplay += 3));
  }

  return (
    <div className='news-cards-list'>
      <ul className='news-cards-list__cards'>
        {isSavedPage
          ? savedArticles.map(
              (card, index) =>
                index < cardsToDisplay &&
                index < savedArticles.length && (
                  <NewsCard key={card._id} card={card} />
                )
            )
          : articles.map(
              (card, index) =>
                index < cardsToDisplay &&
                index < articles.length && <NewsCard key={index} card={card} />
            )}
      </ul>
      <button
        className={
          isSavedPage
            ? 'news-cards-list__button'
            : `${
                cardsToDisplay >=
                (isSavedPage ? savedArticles.length : articles.length)
                  ? 'news-cards-list__button_inactive'
                  : 'news-cards-list__button'
              }`
        }
        onClick={handleShowMoreClick}
        disabled={
          cardsToDisplay >=
          (isSavedPage ? savedArticles.length : articles.length)
            ? true
            : false
        }
      >
        Show more
      </button>
    </div>
  );
}

export default NewsCardList;
