import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/base.scss';
import '../styles/settings.scss';
import layoutStyles from './Layout.module.scss';

interface Props {
  children: ReactNode;
}

const Layout : React.FunctionComponent<Props> = ({ children }) => (
  <div className={layoutStyles.container}>
    <Header />
    <main className={layoutStyles.content}>
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
