import React from 'react';
import classnames from 'classnames';
import Follower from 'types/follower';

import styles from './FollowersList.module.scss';

type Props = {
  followers: Array<Follower>;
  choosenFollowers: Array<Follower>;
  addFollower: (follower: Follower) => void;
};

function isAChoosenFollower(choosenFollowers: Array<Follower>, follower: Follower) {
  return choosenFollowers.map((choosen) => choosen.id).includes(follower.id);
}

const FollowersList: React.FC<Props> = ({ followers, choosenFollowers, addFollower }) => (
  <ul className={classnames(styles['followers-list'])}>
    {followers.map((follower) => (
      <li
        key={follower.id}
        className={classnames(isAChoosenFollower(choosenFollowers, follower) && styles['is-choosen'], 'margin-bt-2')}
        onClick={() => addFollower(follower)}
      >
        <strong>{follower.name}: </strong>
        <span>{follower.username}</span>
      </li>
    ))}
  </ul>
);

export default FollowersList;
