import React from 'react';
import { TaskList } from '../Task/TaskList';

import styles from './Pages.module.scss';

export const Completed = () => (
  <>
    <div className={styles.wrapper}>
      <TaskList completed />
    </div>
  </>
);
