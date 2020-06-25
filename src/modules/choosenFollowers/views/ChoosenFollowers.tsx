import React from 'react';
import Follower from 'types/follower';

type Props = {
  followers: Array<Follower>;
};

const ChoosenFollowers: React.FC<Props> = ({ followers }) => (
  <main className="margin-x">
    <h2 className="margin-bt-2">Choosen followers</h2>
    {followers.length > 0 ? (
      <ul>
        {followers.map((follower) => (
          <li key={follower.id} className="margin-bt-2">
            {follower.name}
          </li>
        ))}
      </ul>
    ) : (
      <h3>Not choosen followers</h3>
    )}
  </main>
);

export default ChoosenFollowers;
