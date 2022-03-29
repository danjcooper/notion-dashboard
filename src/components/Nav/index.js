import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const Nav = () => {
  return (
    <nav>
      <Link className={styles.navLink} to='/'>
        Shopping List
      </Link>
      <Link className={styles.navLink} to='/meals'>
        Meals
      </Link>
      <Link className={styles.navLink} to='/buttons'>
        Buttons
      </Link>
      <Link className={styles.navLink} to='/misc'>
        misc.
      </Link>
    </nav>
  );
};

export default Nav;
