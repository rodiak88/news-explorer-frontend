import './SearchForm.css';
import React from 'react';

function SearchForm() {
  return (
    <div className='search-form'>
      <form className='search-form__form'>
        <input
          type='text'
          name='search-input'
          id='search-input'
          className='search-form__input'
          placeholder='Enter topic'
          required
        />
        <button className='search-form__btn'>Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
