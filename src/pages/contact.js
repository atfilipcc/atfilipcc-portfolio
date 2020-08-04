import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';
import HeadHelmet from '../components/Head';

import styles from './contact.module.scss';

const Contact = () => (
  <div>
    <Layout>
      <HeadHelmet title="Contact" />
      <h1>Contact Information</h1>
      <p>You can get in touch with me through e-mail or LinkedIn, or GitHub.</p>
      <section className={styles.icons}>
        <a title="LinkedIn" className={styles.icon} href="https://www.linkedin.com/in/filipcordas/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} color="#FFFF" size="6x" />
        </a>
        <a title="GitHub" className={styles.icon} href="https://github.com/atfilipcc" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithubSquare} size="6x" color="#FFFF" />
        </a>
        <a title="Email" className={styles.icon} href="mailto:filipccordas@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelopeSquare} color="#FFFF" size="6x" />
        </a>
      </section>
    </Layout>
  </div>
);

export default Contact;
