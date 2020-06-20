import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FollowersContainer from '../modules/followers/containers/FollowersContainer';

const Routes: React.FC<unknown> = () => (
  <Switch>
    <Route exact path="/followers" component={FollowersContainer} />
  </Switch>
);

export default Routes;
