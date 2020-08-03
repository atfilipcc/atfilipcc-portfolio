import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

export const Head = ({ title }) => (
  <Helmet title={`${title} — Filip Cordas`} />
);

Head.propTypes = {
  title: PropTypes.node.isRequired,
};

export default Head;
