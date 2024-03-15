import styles from './app.module.css';
import React from 'react';
import Main from '../components/main';

const App = () => {
  return (
    <div className={styles.app}>
      <Main />
    </div>
  );
};

export default App;
