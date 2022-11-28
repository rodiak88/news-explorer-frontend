import './SavedNews.css';
import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import { data } from '../../utils/data';

function SavedNews() {
  return (
    <section className='savednews'>
      <NewsCardList data={data} />
    </section>
  );
}

export default SavedNews;
