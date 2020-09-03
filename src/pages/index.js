import React from "react";
import { Link } from 'gatsby';
import HeadHelmet from '../components/Head';
import ReactTypingEffect from '../vendor/react-typing-effect';

import styles from './index.module.scss';

const Home = () => (
  <div className={styles.wrapper}>
    <HeadHelmet title="Home" />
    <ReactTypingEffect
      text={['HI. I AM FILIP.', 'WELCOME :-)']}
      speed={80}
      typingDelay={500}
      eraseDelay={300}
      className={styles.header}
    />
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
