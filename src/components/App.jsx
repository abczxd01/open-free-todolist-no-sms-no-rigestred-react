import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from './Header/Header';
import { Completed } from './Pages/Completed';
import { Main } from './Pages/Main';

import './App.scss';

export const App = () => (
  <div className="app">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/completed" component={Completed} />
      </Switch>
    </BrowserRouter>
  </div>
);
