import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import { TaskList } from '../components/Task/TaskList';
import { tasksReducers } from '../components/Task/tasksSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: tasksReducers,
});

describe('TaskList component testing', () => {
  it('Task', () => {
    const taskList = render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );
    screen.debug();
  });

  // it('first render and props testing', () => {
  //   const task = render(
  //     <Provider store={store}>
  //       <Task task={taskProps} />
  //     </Provider>
  //   );
  //   expect(screen.getByDisplayValue(title)).toBeInTheDocument();
  //   userEvent.click(screen.getByAltText('edit'));
  //   expect(screen.getByDisplayValue(text)).toBeInTheDocument();

  //   const checkbox = screen.getByRole('checkbox');
  //   expect(checkbox.getAttribute('checked')).toBe('');
  //   expect(checkbox.checked).toBe(true);
  // });

  // it('first render and props testing', () => {
  //   const task = render(
  //     <Provider store={store}>
  //       <Task task={taskProps2} />
  //     </Provider>
  //   );
  //   expect(screen.getByDisplayValue(title)).toBeInTheDocument();
  //   userEvent.click(screen.getByAltText('edit'));
  //   expect(screen.getByDisplayValue('')).toBeInTheDocument();

  //   const checkbox = screen.getByRole('checkbox');
  //   expect(checkbox.getAttribute('checked')).toBeNull();
  // });
});
