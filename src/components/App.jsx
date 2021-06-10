import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';
import { Header } from './Header/Header';
import { Completed } from './Pages/Completed';
import { Main } from './Pages/Main';

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
