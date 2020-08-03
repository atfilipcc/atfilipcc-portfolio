import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';
import '../styles/base.scss';
import '../styles/settings.scss';
import layoutStyles from './Layout.module.scss';

const Layout = ({ children }) => (
  <div className={layoutStyles.container}>
    <Header />
    <div className={layoutStyles.content}>
      {children}
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
