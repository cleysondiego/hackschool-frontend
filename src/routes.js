import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Index from './pages/Index';
import NewRoom from './pages/NewRoom';
import Room from './pages/Room';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Index} />
      <Route exact path="/rankings" component={Index} />
      <Route exact path="/new-room" component={NewRoom} />
      <Route exact path="/room" component={Room} />
    </Switch>
  );
}
