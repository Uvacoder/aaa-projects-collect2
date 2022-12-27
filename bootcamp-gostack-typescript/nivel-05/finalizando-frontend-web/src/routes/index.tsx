import React from 'react';
import { Switch } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';
import Dashboard from '../pages/Dashboard';
import RouteWrapper from './Route';
import ForgotPassword from '../pages/ForgotPassword';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';

const Routes: React.FC = function () {
  return (
    <Switch>
      <RouteWrapper path="/" exact component={SignIn} />
      <RouteWrapper path="/signup" component={SignUp} />
      <RouteWrapper path="/forgot-password" component={ForgotPassword} />
      <RouteWrapper path="/reset-password" component={ResetPassword} />

      <RouteWrapper path="/dashboard" component={Dashboard} isPrivate />
      <RouteWrapper path="/profile" component={Profile} isPrivate />
    </Switch>
  );
};
export default Routes;
