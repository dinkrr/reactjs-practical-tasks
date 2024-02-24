import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Counter } from './components/Counter';
import reportWebVitals from './reportWebVitals';
import { SearchForm } from './components/SearchForm';

//counter
const counterNumber = 0;
const counterElement = React.createElement(Counter, { counterNumber: counterNumber }, null);

//search-form
const searchQuery = 'Enter Something';

//could be an API call?
function onSearch(searchString) {
  console.log(searchString);
};

const searchForm = React.createElement(SearchForm, { searchQuery: searchQuery, onSearch: onSearch }, null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  [counterElement, searchForm]);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
