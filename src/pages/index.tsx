import * as React from 'react'
import { Link } from 'gatsby';
import HeadHelmet from '../components/Head';
import Typing from 'react-typing-animation';

import styles from './index.module.scss';

const Home : React.FunctionComponent = () => (
  <div className={styles.wrapper}>
    <HeadHelmet title="Home" />
    <Typing
      speed={70}
      startDelay={600}
      className={styles.header}
      loop={true}
      cursorClassName={styles.cursor}
    >
      <div>
      HI.
      <Typing.Delay ms={500} />
      I AM FILIP.
      <Typing.Delay ms={500} />
      <Typing.Backspace count={16} />
      <Typing.Delay ms={500} />
      WELCOME :-)
      <Typing.Delay ms={1100} />
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
