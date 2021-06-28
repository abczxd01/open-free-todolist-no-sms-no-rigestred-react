import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import { Task } from '../components/Task/Task';
import { tasksReducers } from '../components/Task/tasksSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: tasksReducers,
});

const taskProps = {
  title: 'Купить огурцы',
  id: '1wdsaf',
  completed: true,
  text: '214',
};

const taskProps2 = {
  title: 'Купить огурцы',
  id: '1wdsaf',
  completed: false,
};

const { title, id, completed, text } = taskProps;

describe('Task component testing', () => {
  it('first render and props testing', () => {
    const task = render(
      <Provider store={store}>
        <Task task={taskProps} />
      </Provider>
    );
    expect(screen.getByDisplayValue(title)).toBeInTheDocument();
    userEvent.click(screen.getByAltText('edit'));
    expect(screen.getByDisplayValue(text)).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.getAttribute('checked')).toBe('');
    expect(checkbox.checked).toBe(true);
  });

  it('first render and props testing', () => {
    const task = render(
      <Provider store={store}>
        <Task task={taskProps2} />
      </Provider>
    );
    expect(screen.getByDisplayValue(title)).toBeInTheDocument();
    userEvent.click(screen.getByAltText('edit'));
    expect(screen.getByDisplayValue('')).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.getAttribute('checked')).toBeNull();
  });
});
