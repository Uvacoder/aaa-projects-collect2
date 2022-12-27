import React from 'react';
import { Switch } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import RouteWrapper from './Route';

const Routes: React.FC = function () {
  return (
    <Switch>
      <RouteWrapper path="/" exact component={SignIn} />
      <RouteWrapper path="/signup" component={SignUp} />

      <RouteWrapper path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};
export default Routes;
