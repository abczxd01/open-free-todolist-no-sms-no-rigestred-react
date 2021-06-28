import React from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from './actions';

import styles from './CreationMenu.module.scss';

export const CreationMenu = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const title = event.currentTarget.title.value;
    const text = event.currentTarget.text.value;
    if (text) {
      dispatch(createTask({ title, text }));
    } else {
      dispatch(createTask({ title }));
    }
  };
  return (
    <form className={styles.creationMenu} onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Заголовок" required />
      <textarea name="text" placeholder="Описание задачи" />
      <button type="submit">
        Сохранить
      </button>
    </form>
  );
};
