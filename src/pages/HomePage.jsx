import React from 'react';
import Layout from '../components/Layout';
import CallsFeed from '../components/CallsFeed';
import '../styles/HomePage.scss';

const HomePage = () => {
  return (
    <Layout>
      <CallsFeed />
    </Layout>
  );
};

export default HomePage;
