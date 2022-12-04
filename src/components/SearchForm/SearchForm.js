import './SearchForm.css';
import { useState, useEffect } from 'react';
import { useArticles } from '../../contexts/ArticlesContext';

function SearchForm() {
  const { keyword, setKeyword, handleSearch } = useArticles();
  const [isEmptyError, setIsEmptyError] = useState('');

  function handleChange(e) {
    setKeyword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (keyword === '') {
      setIsEmptyError('Please enter a keyword');
    } else {
      setIsEmptyError('');
      handleSearch(keyword);
    }
  }

  useEffect(() => {
    const lastKeyword = localStorage.getItem('keyword');
    if (lastKeyword) {
      setKeyword(lastKeyword);
      handleSearch(lastKeyword);
    }
  }, []);

  return (
    <div className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='searchKeyword'
          id='search-keyword'
          value={keyword || ''}
          onChange={handleChange}
          className='search-form__input'
          placeholder='Enter topic'
        />

        <button className='search-form__btn'>Search</button>
        <span className='search-form__error'>{isEmptyError}</span>
      </form>
    </div>
  );
}

export default SearchForm;
