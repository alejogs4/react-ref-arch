import React from 'react';
import { FollowersClient } from '../services/followers_client';
import Followers from '../views/Followers';
import Follower from 'types/follower';
import { useDispatch, useSelector } from 'react-redux';
import { addFollower, getFollowers } from 'store/ducks/followers';

type Props = {
  followersClient: FollowersClient;
};

const FollowersContainer: React.FC<Props> = ({ followersClient }) => {
  const dispatch = useDispatch();
  const choosenFollowers = useSelector(getFollowers);
  const [followers, setFollower] = React.useState<Array<Follower>>([]);

  React.useEffect(() => {
    followersClient.getAll().then(setFollower);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addFollowerDispatch(follower: Follower) {
    dispatch(addFollower(follower));
  }

  return <Followers followers={followers} choosenFollowers={choosenFollowers} addFollower={addFollowerDispatch} />;
};

export default FollowersContainer;
