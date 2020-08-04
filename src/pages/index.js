import React from "react";
import { Link } from 'gatsby';
import HeadHelmet from '../components/Head';

import styles from './index.module.scss';

const Home = () => (
  <div className={styles.wrapper}>
    <HeadHelmet title="Home" />
    <h1 className={styles.header}>Filip Cordas</h1>
    <nav>
      <ul className={styles.navList}>
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
  </div>
);

export default Home;
