import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { App } from './components/App';
import { tasksReducers } from './reducers/tasksReducers';
import './index.scss';

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
