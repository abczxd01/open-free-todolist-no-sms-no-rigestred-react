import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { tasksReducers } from './components/Task/tasksSlice';
import { App } from './components/App';

const store = configureStore({
  reducer: tasksReducers,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
