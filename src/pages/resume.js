/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable max-len */
import React from 'react';
import Layout from '../components/Layout';
import HeadHelmet from '../components/Head';

import styles from './resume.module.scss';

const Resume = () => (
  <Layout>
    <HeadHelmet title="Resume" />
    <p className={styles.text}>
      I love learning new things. It is the reason I became a developer! I also love music, biking
      and animals. Here is a short summary of my career so far.
    </p>
    <div className={styles.continued}>
      <a href="../../static/CV_Filip Cordas.pdf" download>
        Get my entire resume here.
      </a>
    </div>
    <div className={styles.page}>
      <div className={styles.timeline}>
        <div className={styles.timeline__group}>
          <div className={styles.timeline__box}>
            <div className={styles.timeline__date}>
              <span className={styles.timeline__day}>2020</span>
              <span className={styles.timeline__month}>JUNE</span>
            </div>
            <div className={styles.timeline__post}>
              <div className={styles.timeline__content}>
                <h3 className={styles.title}>Salt Bootcamp completed</h3>
                <p>
                  Finished the intensive 3 month Salt bootcamp, and starting full-time employment as a
                  consultant. At Salt, I have picked valuable skills in several development technologies
                  and JavaScript frameworks for both the front-end and back-end.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.timeline__box}>
            <div className={styles.timeline__date}>
              <span className={styles.timeline__day}>2019</span>
              <span className={styles.timeline__month}>APRIL</span>
            </div>
            <div className={styles.timeline__post}>
              <div className={styles.timeline__content}>
                <h3 className={styles.title}>Started learning development</h3>
                <p>
                  Motivated to learn something new and advance my skills, I started learning development
                  and programming on my free time and after work. I started off with basic JavaScript,
                  and later moved on to React and Node.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.timeline__box}>
            <div className={styles.timeline__date}>
              <span className={styles.timeline__day}>2018</span>
              <span className={styles.timeline__month}>DECEMBER</span>
            </div>
            <div className={styles.timeline__post}>
              <div className={styles.timeline__content}>
                <h3 className={styles.title}>Employed at Aller Media</h3>
                <p>
                  My diverse Media Specialist role inspired me to pick up many different skillsets, that
                  led me to look further into development.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.timeline__box}>
            <div className={styles.timeline__date}>
              <span className={styles.timeline__day}>2016</span>
              <span className={styles.timeline__month}>OCTOBER</span>
            </div>
            <div className={styles.timeline__post}>
              <div className={styles.timeline__content}>
                <h3 className={styles.title}>Employed at IUM Norway</h3>
                <p>
                  I was a Performance Specialist in digital marketing, where I worked with many
                  interesting clients from both the public and private sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Resume;

// eslint-disable-next-line no-lone-blocks
{ /* <p className={styles.text}>
      I love learning new things. It is the reason I became a developer! I also love music, biking
      and animals. Here is a short summary of my career so far.
    </p>
    <div className={styles.continued}>
      <a href="../../static/CV_Filip Cordas.pdf" download>
        Get my entire resume here.
      </a>
    </div>
    <br />
    <div className={styles.container}>
      <ul>
        <li>
          <span />
          <div className={styles.itemWrapper}>
            <div className={styles.title}>Employed at Salt</div>
            <div className={styles.info}>
              Finished the intensive 3 month Salt bootcamp, and starting full-time employment as a
              consultant. At Salt, I have picked valuable skills in several development technologies
              and JavaScript frameworks.
              {' '}
            </div>
          </div>
          <span className={styles.number}>
            <span>July 20</span>
            <span />
          </span>
        </li>
        <li>
          <div className={styles.itemWrapper}>
            <span />
            <div className={styles.title}>Started learning development</div>
            <div className={styles.info}>
              Motivated to learn something new and advance my skills, I started learning development
              and programming on my free time and after work. I started off with basic JavaScript,
              and later moved on to React and Node.
            </div>
          </div>
          <span className={styles.number}>
            <span>April 19</span>
            <span />
          </span>
        </li>
        <li>
          <div className={styles.itemWrapper}>
            <span />
            <div className={styles.title}>Employed at Aller Media</div>
            <div className={styles.info}>
              My diverse Media Specialist role inspired me to pick up many different skillsets, that
              led me to look further into development.
            </div>
          </div>
          <span className={styles.number}>
            <span>Dec 18</span>
            <span />
          </span>
        </li>
        <li>
          <div className={styles.itemWrapper}>
            <span />
            <div className={styles.title}>Employed at IUM Norway</div>
            <div className={styles.info}>
              I was a Performance Specialist in digital marketing, where I worked with many
              interesting clients from both the public and private sector.
            </div>
          </div>
          <span className={styles.number}>
            <span>Oct 16</span>
            <span />
          </span>
        </li>
        <li>
          <div className={styles.itemWrapper}>
            <span />
            <div className={styles.title}>BI Norwegian Business School</div>
            <div className={styles.info}>
              I studied Marketing and Communications at BI - which is not quite development, but it helped me realize I want to work with great products that improve peoples lives.
            </div>
          </div>
          <span className={styles.number}>
            <span>Aug 12</span>
            <span />
          </span>
        </li>
      </ul>
    </div> */ }
