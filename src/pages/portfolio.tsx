import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../components/Layout';
import HeadHelmet from '../components/Head';

import pfStyles from './portfolio.module.scss';



const renderTechDiv = (edge) => {
  const techStack = edge.node.tech.split(',');
  return techStack.map((tech: string) => (
    <div key={tech} className={`${pfStyles.button_tech} ${tech.toLowerCase()}`}>
      {tech}
    </div>
  ));
};

const PortfolioPage : React.FunctionComponent = () => {
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
        <section className={pfStyles.items}>
          {data.allContentfulPortfolioItem.edges.map((edge) => (
            <article className={pfStyles.itemWrapper} key={edge.node.title}>
              <Link className={pfStyles.item} to={`/portfolio/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <div className={pfStyles.button_wrapper}>{renderTechDiv(edge)}</div>
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
