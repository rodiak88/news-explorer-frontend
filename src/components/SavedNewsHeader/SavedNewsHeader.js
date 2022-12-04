import './SavedNewsHeader.css';
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { usePopups } from '../../contexts/PopupsContext';
import { useArticles } from '../../contexts/ArticlesContext';

function SavedNewsHeader() {
  const { currentUser } = useAuth();
  const { savedArticles } = useArticles();
  const { isMobileNavOpen } = usePopups().popups.mobileNav;
  const [uniqueKeywords, setUniqueKeywords] = useState([]);

  function sortByFrequency(array) {
    let frequency = {};

    array.forEach((value) => {
      frequency[value] = 0;
    });

    let uniques = array.filter((value) => {
      return ++frequency[value] === 1;
    });

    return uniques.sort((a, b) => {
      return frequency[b] - frequency[a];
    });
  }

  const findUniqueKeywords = () => {
    const keywordsArr = savedArticles.map((article) => article.keyword);
    const sortedUniqueKeywordsArr = sortByFrequency(keywordsArr);
    setUniqueKeywords(sortedUniqueKeywordsArr);
  };

  useEffect(() => {
    findUniqueKeywords();
  }, [savedArticles]);

  return (
    <div
      className={`savednewsheader ${
        isMobileNavOpen && 'savednewsheader__nav-open'
      }`}
    >
      <p className='savednewsheader__title'>Saved articles</p>
      <h1 className='savednewsheader__welcome'>
        {currentUser.name}, you have {savedArticles.length} saved articles
      </h1>
      {uniqueKeywords.length > 0 && (
        <p className='savednewsheader__keywords'>
          By keywords:&nbsp;
          <span className='savednewsheader__keywords savednewsheader__keywords_type_bold'>
            {uniqueKeywords.length > 0 && `${uniqueKeywords[0]}`}
            {uniqueKeywords.length > 1 && `, ${uniqueKeywords[1]}`}
            {uniqueKeywords.length > 2 &&
              (uniqueKeywords.length === 3
                ? `, and ${uniqueKeywords[2]}`
                : `, and ${uniqueKeywords.length - 2} others`)}
          </span>
        </p>
      )}
    </div>
  );
}

export default SavedNewsHeader;
