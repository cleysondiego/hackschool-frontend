import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Index from './pages/Index';
import NewRoom from './pages/NewRoom';
import Room from './pages/Room';
import Rankings from './pages/Rankings';
import Courses from './pages/Courses';
import Motivation from './pages/Motivation';
import Projects from './pages/Projects';
import NewProject from './pages/NewProject';
import Events from './pages/Events';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Index} />
      <Route path="/courses" component={Courses} />
      <Route path="/new-room" component={NewRoom} />
      <Route path="/room" component={Room} />
      <Route path="/rankings" component={Rankings} />
      <Route path="/motivation" component={Motivation} />
      <Route path="/projects" component={Projects} />
      <Route path="/new-project" component={NewProject} />
      <Route path="/events" component={Events} />
    </Switch>
  );
}
