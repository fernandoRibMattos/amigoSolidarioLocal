import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Principal from './pages/Principal';
import CadastrarLoja from './pages/CadastrarLoja';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Principal} />
        <Route path="/cadastro" exact component={CadastrarLoja} />
      </Switch>
    </BrowserRouter>
  );
}