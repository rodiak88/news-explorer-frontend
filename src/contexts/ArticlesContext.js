import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import mainApi from '../utils/MainApi';
import newsApi from '../utils/NewsApi';

const ArticlesContext = createContext();

const ArticlesContextProvider = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const [keyword, setKeyword] = useState('');
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isSearchError, setIsSearchError] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setSavedArticles([]);
      return;
    } else {
      mainApi
        .getSavedArticles()
        .then((res) => {
          setSavedArticles(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);

  function handleSearch(topic) {
    setArticles([]);
    setIsNotFound(false);
    setIsLoading(true);
    newsApi
      .searchNews(topic)
      .then((results) => {
        if (results.articles.length === 0) {
          setIsNotFound(true);
          return;
        }
        setArticles(results.articles);
        localStorage.setItem('keyword', topic);
      })
      .catch((err) => {
        console.log(err);
        setIsSearchError(true);
      })
      .finally(() => setIsLoading(false));
  }

  function handleSaveArticle(article) {
    if (!isLoggedIn) {
      return;
    }
    mainApi
      .saveArticle(article)
      .then((res) => {
        setSavedArticles([...savedArticles, res.data]);
      })
      .catch((err) => console.log(err));
  }

  function isArticleSaved(article) {
    return savedArticles.find(
      (savedArticle) => savedArticle.link === article.link
    );
  }

  function handleDeleteArticle(article) {
    mainApi
      .deleteArticle(article._id)
      .then((res) => {
        setSavedArticles((state) =>
          state.filter((currentArticle) => currentArticle._id !== article._id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <ArticlesContext.Provider
      value={{
        keyword,
        setKeyword,
        articles,
        setArticles,
        savedArticles,
        handleSearch,
        isLoading,
        isNotFound,
        isSearchError,
        handleSaveArticle,
        isArticleSaved,
        handleDeleteArticle,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesContextProvider;

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  return context;
};
