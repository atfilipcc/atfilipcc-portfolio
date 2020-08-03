/* eslint-disable max-len */
import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../components/Layout';
import HeadHelmet from '../components/Head';

const Resume = () => (
  <div>
    <Layout>
      <HeadHelmet title="Resume" />
      <h1 id="education-training">EDUCATION &amp; TRAINING</h1>
      <p>
        <strong>Full Stack JavaScript - School of Applied Technology salt</strong>
        <br />
        <em>Apr 2020 - Jul 2020</em>
        <br />
        Intensive three month training program for full stack JavaScript web development with a focus on TDD, mob programming, and applied learning.
      </p>
      <br />
      <p>
        <strong>Marketing &amp; Communication - BI Norwegian Business School</strong>
        <br />
        <em>Sep 2012 - May 2015</em>
        <br />
        Bachelor&#39;s degree focused on marketing, business, and brand management.
      </p>
      <br />
      <h1 id="work-experience">WORK EXPERIENCE</h1>
      <p>
        <strong>Media Specialist – Aller Media Norway</strong>
        <br />
        <em>Dec 2018 - Jun 2020</em>
        <br />
        Market/data analysis, digital marketing and brand management for Aller Media, Norway&#39;s fourth largest media company.
      </p>
      <p>
        <br />
        <strong>Performance Specialist - IUM Norway</strong>
        <br />
        <em>Oct 2016 - Dec 2018</em>
        <br />
        Advising and managing digital marketing and brand strategy for a broad portfolio of clients and brands, in both the private and public sector.
      </p>
      <br />
      <h1 id="volunteer-work">VOLUNTEER WORK</h1>
      <p>
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


      <Link to="/contact">Contact me!</Link>
    </Layout>
  </div>
);
export default Resume;
