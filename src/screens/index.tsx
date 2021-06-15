import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import Routes from '../config/Routes';
import ErrorScreen from './ErrorScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

function EntryScreen() {
  return (
    <div className="w-full min-h-screenbg-primary-dark overflow-y-auto">
      <Switch>
        <Route path={Routes.login} component={LoginScreen} />
        <ProtectedRoute path={Routes.dashboard} component={HomeScreen} />
        <Route path={Routes.base} component={HomeScreen} />
        <Route path="/*" component={ErrorScreen} />
      </Switch>
    </div>
  );
}

export default EntryScreen;
