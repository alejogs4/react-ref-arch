import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './Header.module.scss';

const Header: React.FC<unknown> = () => (
  <header className={classnames(styles.header)}>
    <h1>Demo</h1>
    <nav>
      <ul>
        <li>
          <Link href="/followers" to="/followers">
            Followers
          </Link>
        </li>
        <li>
          <Link href="/followers/choosen" to="/followers/choosen">
            Choosen Followers
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
