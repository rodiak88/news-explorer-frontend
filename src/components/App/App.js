import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import SigninPopup from '../SigninPopup/SigninPopup';
import SignupPopup from '../SignupPopup/SignupPopup';
import SearchResults from '../SearchResults/SearchResults';

function App() {
  return (
    <div className='page'>
      <div className='page__container'>
        <Header />

        <Switch>
          <Route path='/saved-news'>
            <SavedNews />
          </Route>
          <Route exact path='/'>
            <SearchResults />
            <Main />
          </Route>
        </Switch>

        <Footer />
        <SigninPopup name='signin' title='Sign in' />
        <SignupPopup name='signin' title='Sign up' />
      </div>
    </div>
  );
}

export default App;
