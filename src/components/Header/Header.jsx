import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';
import searchIcon from '$img/search.svg';

export const Header = () => {
  const [search, setSearch] = useState(false);
  const handleKeyPress = event => {
    if (event.code.toLowerCase() === 'enter') {
      setSearch(false);
    }
  };

  return (
    <header className={styles.header}>
      {search ? (
        <input type="text" className={styles.searchInput} onKeyPress={handleKeyPress} />
      ) : (
        <>
          <NavLink className={styles.item} to="/">
            ЗАДАЧИ
          </NavLink>
          <NavLink className={styles.item} to="/completed">
            ЗАВЕРШЕННЫЕ
          </NavLink>
        </>
      )}
      <button
        className={styles.item}
        type="button"
        onClick={() => {
          setSearch(!search);
        }}>
        <img src={searchIcon} alt="search" />
      </button>
    </header>
  );
};
