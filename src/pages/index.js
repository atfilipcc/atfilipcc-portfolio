import React from "react";
import { Link } from 'gatsby';
import HeadHelmet from '../components/Head';
import Typing from 'react-typing-animation';

import styles from './index.module.scss';

const Home = () => (
  <div className={styles.wrapper}>
    <HeadHelmet title="Home" />
    <Typing
      speed={70}
      startDelay={500}
      className={styles.header}
      loop={true}
      cursorClassName={styles.cursor}
    >
      <div>
      HI.
      <Typing.Delay ms={300} />
      <nbsp> </nbsp>I AM FILIP.
      <Typing.Delay ms={500} />
      <Typing.Backspace count={16} />
      <Typing.Delay ms={300} />
      WELCOME :-)
      <Typing.Delay ms={1000} />
      <Typing.Backspace count={16} />
      </div>
    </Typing>
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
