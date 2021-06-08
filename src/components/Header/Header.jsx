import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  const [search, setSearch] = useState(false);
  const handleKeyPress = event => {
    if (event.code.toLowerCase() === 'enter') {
      setSearch(false);
    }
  };

  return (
    <header className="header">
      {search ? (
        <input
          type="text"
          className="header__search-input"
          onKeyPress={handleKeyPress}
        />
      ) : (
        <>
          <NavLink className="header__item" to="/">
            ЗАДАЧИ
          </NavLink>
          <NavLink className="header__item" to="/completed">
            ЗАВЕРШЕННЫЕ
          </NavLink>
        </>
      )}
      <button
        className="header__item"
        type="button"
        onClick={() => {
          setSearch(!search);
        }}
      >
        <img src="./assets/images/search.svg" alt="search" />
      </button>
    </header>
  );
};
