import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import { useArticles } from '../../contexts/ArticlesContext';

function SavedNews() {
  const { savedArticles } = useArticles();

  return (
    <section className='savednews'>
      <NewsCardList data={savedArticles} />
    </section>
  );
}

export default SavedNews;
