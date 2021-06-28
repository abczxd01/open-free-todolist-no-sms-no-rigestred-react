import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';

import { getAllTask } from './actions';

import { Task } from './Task';

import styles from './TaskList.module.scss';

export const TaskList = ({ completedFilter }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  useEffect(() => {
    dispatch(getAllTask());
  }, []);
  return (
    <div className={styles.list}>
      {tasks.map(task => {
        if (completedFilter) {
          if (task.completed) {
            return <Task task={task} key={task.id} />;
          }
        } else if (!task.completed) {
          return <Task task={task} key={task.id} />;
        }
      })}
    </div>
  );
};

TaskList.defaultProps = {
  completedFilter: false,
};

TaskList.propTypes = {
  completedFilter: propTypes.bool,
};
