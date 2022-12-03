import './SearchResults.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import { useArticles } from '../../contexts/ArticlesContext';

function SearchResults() {
  const { articles } = useArticles();
  return (
    <section className='search-results'>
      <div className='search-results__container'>
        <h2 className='search-results__title'>Search results</h2>
        <NewsCardList data={articles} />
      </div>
    </section>
  );
}

export default SearchResults;
