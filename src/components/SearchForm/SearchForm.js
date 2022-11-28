import './SearchForm.css';
import React from 'react';

function SearchForm() {
  return (
    <>
      <form className='searchForm__form'>
        <input
          type='text'
          name='search-input'
          id='search-input'
          className='searchForm__input'
          placeholder='Enter topic'
          required
        />
        <button className='searchForm__btn'>Search</button>
      </form>
    </>
  );
}

export default SearchForm;
