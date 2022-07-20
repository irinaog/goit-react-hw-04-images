import { useState } from "react";
import PropTypes from 'prop-types';

import css from './Searchbar.module.css';
import { BsSearch } from '@react-icons/all-files/bs/BsSearch';

export const Searchbar = ({ onSubmit }) => {
  const [imagesName, setImagesName] = useState('');

  const handleChange = evt => {
    setImagesName(evt.currentTarget.value)
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (imagesName.trim() === '') {
      alert('Please enter something')
      return;
    }
    onSubmit(imagesName)
    setImagesName('');
  };

  return <header onSubmit={handleSubmit} className={css.searchbar}>
    <form className={css.form} >
      <button type="submit" className={css.button}>
        <span className={css.buttonLabel}><BsSearch /></span>
      </button>

      <input
        onChange={handleChange}
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={imagesName}
      />
    </form>
  </header>
  
    
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

