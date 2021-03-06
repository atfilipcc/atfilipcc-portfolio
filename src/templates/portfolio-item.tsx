/* eslint-disable react/no-danger */
import React from 'react';
import { Document } from '@contentful/rich-text-types';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/Layout';
import HeadHelmet from '../components/Head';

import styles from './portfolio-item.module.scss';

export const query = graphql`
query($slug: String!) {
  contentfulPortfolioItem(slug: {eq: $slug}) {
    title
    githubLink
    liveLink
    date(formatString: "DD.MM.YYYY")
    body {
      json
    }
  }
}
`;

interface Props {
    data: {
      contentfulPortfolioItem: {
        githubLink : string,
        liveLink : string,
        title : string,
        date : string,
        body: {
          json : Document
        }
      }
  }
}

const portfolioItem : React.FunctionComponent<Props> = ({ data }) => {
  const options = {
    renderNode: {
      // eslint-disable-next-line react/display-name
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
      <section className={styles.icons}>
        <a title="GitHub" className={styles.icon} href={data.contentfulPortfolioItem.githubLink} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithubSquare} size="3x" color="#FFFF" />
        </a>
        <a title="Link to deploy" className={styles.icon} href={data.contentfulPortfolioItem.liveLink} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLink} size="3x" color="#FFFF" />
        </a>
      </section>
      <br />
      <section className={styles.richText}>
        {documentToReactComponents(data.contentfulPortfolioItem.body.json, options)}
      </section>
    </Layout>
  );
};

export default portfolioItem;
