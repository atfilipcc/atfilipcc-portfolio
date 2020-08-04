/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import { PropTypes } from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/Layout';
import HeadHelmet from '../components/Head';

import styles from './portfolio-item.module.scss';


export const query = graphql`
query($slug: String!) {
  contentfulPortfolioItem(slug: {eq: $slug}) {
    title
    date(formatString: "DD.MM.YYYY")
    body {
      json
    }
  }
}
`;

const portfolioItem = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title["en-US"];
        const { url } = node.data.target.fields.file["en-US"];
        return <img alt={alt} src={url} />;
      },
    },
  };
  return (
    <Layout>
      <HeadHelmet title={data.contentfulPortfolioItem.title} />
      <h1 className={styles.title}>{data.contentfulPortfolioItem.title}</h1>
      <h4 className={styles.title}>{data.contentfulPortfolioItem.date}</h4>
      <br />
      {documentToReactComponents(data.contentfulPortfolioItem.body.json, options)}
    </Layout>
  );
};

portfolioItem.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default portfolioItem;
