import React from 'react';
import { Link } from 'gatsby';

import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <header className={styles.text}>
      <h1>
        <Link className={styles.title} to="/">
          Filip Cordas
        </Link>
      </h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/resume"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;
