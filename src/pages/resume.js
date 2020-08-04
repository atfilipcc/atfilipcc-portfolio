/* eslint-disable max-len */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/Layout';
import HeadHelmet from '../components/Head';

import styles from './resume.module.scss';

const Resume = () => (
  <Layout>
    <HeadHelmet title="Resume" />
    <div className={styles.container}>
      <ul>
        <li>
          <span />
          <div>
            <div className={styles.title}>Started working at Salt</div>
            <div className={styles.info}>Finished the Salt bootcamp, and starting full-time employment as a consultant. At Salt, I have picked valuable skills in several development technologies and JavaScript frameworks. </div>
          </div>
          <span className={styles.number}>
            <span>July 20</span>
            <span />
          </span>
        </li>
        <li>
          <div>
            <span />
            <div className={styles.title}>Started learning web-development</div>
            <div className={styles.info}>Motivated to learn something  new  and advance my skills, I started learning development and programming on my free time and after work. I started off with basic JavaScript, and later moved on to React and Node.</div>
          </div>
          <span className={styles.number}>
            <span>April 19</span>
            <span />
          </span>
        </li>
        <li>
          <div>
            <span />
            <div className={styles.title}>Started working at Aller Media</div>
            <div className={styles.info}>My diverse Media Specialist role inspired me to pick up many different skillsets, that led me to look further into development. </div>
          </div>
          <span className={styles.number}>
            <span>Dec 18</span>
            <span />
          </span>
        </li>
      </ul>
      <div className={styles.continued}>
        <a href="../../static/CV_Filip Cordas.pdf" download> Get my entire resume here.</a>
      </div>
    </div>
  </Layout>
);
// eslint-disable-next-line no-lone-blocks
{ /* <HeadHelmet title="Resume" />
      <div className={styles.container}>
        <h1 className={styles.title} id="education-training">EDUCATION &amp; TRAINING</h1>
        <p className={styles.description}>
          <strong>Full Stack JavaScript - School of Applied Technology salt</strong>
          <br />
          <em>Apr 2020 - Jul 2020</em>
          <br />
          Intensive three month training program for full stack JavaScript web development with a focus on TDD, mob programming, and applied learning.
        </p>
        <br />
        <p className={styles.description}>
          <strong>Marketing &amp; Communication - BI Norwegian Business School</strong>
          <br />
          <em>Sep 2012 - May 2015</em>
          <br />
          Bachelor&#39;s degree focused on marketing, business, and brand management.
        </p>
        <br />
        <h1 className={styles.title} id="work-experience">WORK EXPERIENCE</h1>
        <p className={styles.description}>
          <strong>Media Specialist – Aller Media Norway</strong>
          <br />
          <em>Dec 2018 - Jun 2020</em>
          <br />
          Market/data analysis, digital marketing and brand management for Aller Media, Norway&#39;s fourth largest media company.
        </p>
        <p className={styles.description}>
          <br />
          <strong>Performance Specialist - IUM Norway</strong>
          <br />
          <em>Oct 2016 - Dec 2018</em>
          <br />
          Advising and managing digital marketing and brand strategy for a broad portfolio of clients and brands, in both the private and public sector.
        </p>
        <br />
        <h1 className={styles.title} id="volunteer-work">VOLUNTEER WORK</h1>
        <p className={styles.description}>
          <strong>
            Volunteer - Red Cross
          </strong>
          <br />
          <em>
            March 2019 - current
          </em>
          <br />
          Volunteer at a Red Cross youth cafe in Oslo. The cafe focuses on providing a safe space for school work and social activities for youth.
        </p>
      </div> */ }
export default Resume;
