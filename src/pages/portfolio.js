import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../components/Layout';
import HeadHelmet from '../components/Head';

import pfStyles from './portfolio.module.scss';

const renderTechButtons = (edge) => {
  const techStack = edge.node.tech.split(',');
  return techStack.map((tech) => (
    <button className={`${pfStyles.button_tech} ${tech.toLowerCase()}`} type="button">
      {tech}
    </button>
  ));
};

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioItem(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            slug
            date(formatString: "DD.MM.YYYY")
            tech
            description
            body {
              json
            }
          }
        }
      }
    }
  `);
  return (
    <div>
      <Layout>
        <HeadHelmet title="Portfolio" />
        <h1>My projects</h1>
        <section className={pfStyles.items}>
          {data.allContentfulPortfolioItem.edges.map((edge) => (
            <article className={pfStyles.itemWrapper} key={edge.node.title}>
              <Link className={pfStyles.item} to={`/portfolio/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <div className={pfStyles.button_wrapper}>{renderTechButtons(edge)}</div>
                <h6>{edge.node.date}</h6>
                <p>{edge.node.description}</p>
              </Link>
            </article>
          ))}
        </section>
      </Layout>
    </div>
  );
};

export default PortfolioPage;
