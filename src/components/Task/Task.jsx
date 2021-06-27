import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';

import { deleteTask, updateTask } from './actions';

import styles from './Task.module.scss';
import editIcon from '$img/edit.svg';
import deleteIcon from '$img/delete.svg';

export const Task = ({ task }) => {
  const { title, text, id, completed } = task;

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const changeShowMenu = () => setShowMenu(currShowMenu => !currShowMenu);
  const removeTask = () => dispatch(deleteTask(id));
  const completeTask = () => dispatch(updateTask({ id, completed: !completed }));

  const updateTimerRef = useRef();
  const handleUpdateTask = event => {
    clearTimeout(updateTimerRef.current);
    if (event.currentTarget.tagName === 'TEXTAREA') {
      updateTimerRef.current = setTimeout(() => {
        dispatch(updateTask({ id, text: event.target.value }));
      }, 1000);
    } else {
      updateTimerRef.current = setTimeout(() => {
        dispatch(updateTask({ id, title: event.target.value }));
      }, 1000);
    }
  };

  return (
    <div>
      <div className={styles.field}>
        <label className={styles.checkbox} htmlFor="checkbox">
          <input type="checkbox" id="checkbox" defaultChecked={completed} onChange={completeTask} />
          <span />
        </label>

        <input type="text" defaultValue={title} className={styles.textInput} onChange={handleUpdateTask} />
        <button className={styles.bth} type="button" onClick={changeShowMenu}>
          <img src={editIcon} alt="edit" />
        </button>

        <button className={styles.bth} type="button" onClick={removeTask}>
          <img src={deleteIcon} alt="delete" />
        </button>
      </div>

      {showMenu && (
        <div className={styles.menu}>
          <textarea defaultValue={text ?? ''} onChange={handleUpdateTask} />
        </div>
      )}
    </div>
  );
};

Task.propTypes = {
  task: propTypes.exact({
    title: propTypes.string.isRequired,
    text: propTypes.string,
    id: propTypes.string.isRequired,
    completed: propTypes.bool.isRequired,
  }).isRequired,
};
