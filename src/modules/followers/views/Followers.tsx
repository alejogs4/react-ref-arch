import React from 'react';
import Follower from 'types/follower';
import FollowersList from './components/FollowersList/FollowersList';
import styles from './Followers.module.scss';

type Props = {
  followers: Array<Follower>;
  choosenFollowers: Array<Follower>;
  addFollower: (follower: Follower) => void;
};

const Followers: React.FC<Props> = ({ followers, addFollower, choosenFollowers }) => (
  <main className={styles['followers-container']}>
    <h2 className="margin-bt-2">Followers</h2>
    <div className="grid column-2 column-gap-1">
      <FollowersList followers={followers} addFollower={addFollower} choosenFollowers={choosenFollowers} />
    </div>
  </main>
);

export default Followers;
