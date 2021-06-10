import React, { useState } from 'react';

import styles from './CreationMenu.module.scss';

export const CreationMenu = () => {
  const [data, setData] = useState({ title: '', text: '' });

  const handleChange = event => {
    if (event.target.tagName === 'TEXTAREA') {
      setData({ title: data.title, text: event.target.value });
    } else {
      setData({ title: event.target.value, text: data.text });
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!data.title && !data.text) return;
    if (!data.title) return;
    const reqBody = { title: data.title };
    if (data.text) reqBody.text = data.text;
  };
  return (
    <form className={styles.creationMenu}>
      <input
        type="text"
        placeholder="Заголовок"
        value={data.title}
        onChange={handleChange} />
      <textarea
        placeholder="Описание задачи"
        value={data.text}
        onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Сохранить
      </button>
    </form>
  );
};
