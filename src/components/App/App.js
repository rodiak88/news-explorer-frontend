import './App.css';
import { Route, Switch } from 'react-router';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import SigninPopup from '../SigninPopup/SigninPopup';
import SignupPopup from '../SignupPopup/SignupPopup';
import MessagePopup from '../MessagePopup/MessagePopup';
import SearchResults from '../SearchResults/SearchResults';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useArticles } from '../../contexts/ArticlesContext';

function App() {
  const { isLoading, articles, isNotFound, isSearchError } = useArticles();

  return (
    <div className='page'>
      <div className='page__container'>
        <Header />

        <Switch>
          <ProtectedRoute path='/saved-news'>
            <SavedNews />
          </ProtectedRoute>
          <Route exact path='/'>
            {isLoading && <Preloader />}
            {(isNotFound || isSearchError) && (
              <NotFound isSearchError={isSearchError} />
            )}
            {articles.length > 0 && <SearchResults />}
            <Main />
          </Route>
        </Switch>

        <Footer />
        <SigninPopup name='signin' title='Sign in' />
        <SignupPopup name='signin' title='Sign up' />
        <MessagePopup name='success' />
      </div>
    </div>
  );
}

export default App;
