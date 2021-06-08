import React, { useState } from 'react';

import './Task.scss';
import editIcon from './edit.svg';
import deleteIcon from './delete.svg';

export const Menu = ({ text }) => (
  <div className="menu">
    <textarea defaultValue={text ?? ''} />
  </div>
);

export const Task = ({ title, text, id, completed }) => {
  const [edit, setEdit] = useState(false);

  const [taskInfo, setTaskInfo] = useState({
    title,
    text,
    id,
    completed,
  });
  const handleChange = event => {};
  const deleteTask = () => {};
  const completeTask = () => {};
  return (
    <div>
      <div className="task">
        <label className="task__checkbox">
          <input type="checkbox" />
          <span />
        </label>
        <input type="text" value={title} className="task__text" />
        <button
          className="task__bth"
          type="button"
          onClick={() => {
            setEdit(!edit);
          }}>
          <img src={editIcon} alt="edit" />
        </button>
        <button className="task__bth" type="button" onClick={deleteTask}>
          <img src={deleteIcon} alt="delete" />
        </button>
      </div>

      {edit && <Menu text={text} />}
    </div>
  );
};
