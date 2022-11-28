import './SavedNewsHeader.css';
import React from 'react';
import { data } from '../../utils/data';
import { useAuth } from '../../contexts/AuthContext';
import { usePopups } from '../../contexts/PopupsContext';

function SavedNewsHeader() {
  const { currentUser } = useAuth();
  const uniqueKeywords = [...new Set(data.map((card) => card.keyword))];
  const { isMobileNavOpen } = usePopups().popups.mobileNav;

  return (
    <div
      className={`savednewsheader ${
        isMobileNavOpen && 'savednewsheader__nav-open'
      }`}
    >
      <p className='savednewsheader__title'>Saved articles</p>
      <h1 className='savednewsheader__welcome'>
        {currentUser.name}, you have {data.length} saved articles
      </h1>
      {uniqueKeywords.length > 0 && (
        <p className='savednewsheader__keywords'>
          By keywords:&nbsp;
          <span className='savednewsheader__keywords savednewsheader__keywords_type_bold'>
            {uniqueKeywords.length > 0 && `${uniqueKeywords[0]}`}
            {uniqueKeywords.length > 1 && `, ${uniqueKeywords[1]}`}
            {uniqueKeywords.length > 2 &&
              `, and ${uniqueKeywords.length - 2} others`}
          </span>
        </p>
      )}
    </div>
  );
}

export default SavedNewsHeader;
