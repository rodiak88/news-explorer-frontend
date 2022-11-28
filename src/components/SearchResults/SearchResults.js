import './SearchResults.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import { data } from '../../utils/data';

function SearchResults() {
  return (
    <section className='search-results'>
      <div className='search-results__container'>
        <h2 className='search-results__title'>Search results</h2>
        <NewsCardList data={data} />
      </div>
    </section>
  );
}

export default SearchResults;
