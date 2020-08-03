import React from "react";
import HeadHelmet from '../components/Head';
import Layout from "../components/Layout";

const styles = './index.module.scss';

const Home = () => (
  <div>
    <Layout>
      <HeadHelmet title="Home" />
      <h1 className={styles.header}>Filip Cordas</h1>
    </Layout>
  </div>
);

export default Home;
