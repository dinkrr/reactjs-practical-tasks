import './main.css';
import React from 'react';
import Counter from '../counter';
import SearchForm from '../search-form';
import GenreSelector from '../genre-selector';

const Main = () => {
  return (
    <main>
      <Counter />
      <SearchForm />
      <GenreSelector />
    </main>
  );
};

export default Main;
