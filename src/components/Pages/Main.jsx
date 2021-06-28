import React, { useState } from 'react';

import { CreationMenu } from '../Task/CreationMenu';
import { TaskList } from '../Task/TaskList';

import styles from './Pages.module.scss';
import addIcon from '$img/add.svg';

export const Main = () => {
  const [isCreate, setisCreate] = useState(false);
  return (
    <>
      <div className={styles.wrapper}>
        <button
          onClick={() => {
            setisCreate(create => !create);
          }}
          type="button"
          className={styles.button}>
          <img src={addIcon} alt="add" />
        </button>
        {isCreate && <CreationMenu />}
        <TaskList />
      </div>
    </>
  );
};
