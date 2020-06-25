import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FollowersContainer from 'modules/followers/containers/FollowersContainer';
import ChoosenFollowersContainer from 'modules/choosenFollowers/containers/ChoosenFollowersContainer';

import buildFollowersClient from 'modules/followers/services/followers_client';
import axiosProvider from 'services/axios_client';

const Routes: React.FC<unknown> = () => {
  const followersClient = buildFollowersClient(axiosProvider);

  return (
    <Switch>
      <Route exact path="/followers" component={() => <FollowersContainer followersClient={followersClient} />} />
      <Route exact path="/followers/choosen" component={ChoosenFollowersContainer} />
    </Switch>
  );
};

export default Routes;
