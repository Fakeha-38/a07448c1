import React from 'react';
import '../styles/Layout.scss';
import CallsFeed from './CallsFeed';

const Layout = () => {
  console.log("Rendering Layout component");
  return (
    <div className="layout">
      <h1>AirCall</h1>
      <CallsFeed /> 
    </div>
  );
};

export default Layout;
