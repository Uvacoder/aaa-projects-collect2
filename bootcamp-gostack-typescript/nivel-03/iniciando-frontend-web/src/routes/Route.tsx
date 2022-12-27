import React from 'react';
import {
  RouteProps as ReactRouteProps,
  Route,
  Redirect,
} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const RouteWrapper: React.FC<RouteProps> = function ({
  isPrivate = false,
  component: Component,
  ...rest
}) {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default RouteWrapper;
