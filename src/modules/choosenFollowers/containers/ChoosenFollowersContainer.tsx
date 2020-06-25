import React from 'react';
import { useSelector } from 'react-redux';
import { getFollowers } from 'store/ducks/followers';
import ChoosenFollowers from '../views/ChoosenFollowers';

const ChoosenFollowersContainer: React.FC<unknown> = () => {
  const choosenFollowers = useSelector(getFollowers);

  return <ChoosenFollowers followers={choosenFollowers} />;
};

export default ChoosenFollowersContainer;
