import './NewsCardList.css';
import { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ isActive, data, ...props }) {
  const [cardsToDisplay, setCardsToDisplay] = useState(3);

  function handleShowMoreClick() {
    setCardsToDisplay((cardsToDisplay) => (cardsToDisplay += 3));
  }

  return (
    <div className='news-cards-list'>
      <ul className='news-cards-list__cards'>
        {data.map(
          (card, index) =>
            index < cardsToDisplay &&
            index < data.length && <NewsCard key={card._id} card={card} />
        )}
      </ul>
      <button
        className='news-cards-list__button'
        onClick={handleShowMoreClick}
        disabled={cardsToDisplay >= data.length ? true : false}
      >
        Show more
      </button>
    </div>
  );
}

export default NewsCardList;
