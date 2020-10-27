import React from 'react';

import Layout from '../components/Layout';

const NotFound : React.FunctionComponent = () => (
  <Layout>
    <h1>
      Oops! Page not found
      <span role="img" aria-label="exploding-head-emoji">🤯</span>
    </h1>
  </Layout>
);

export default NotFound;
