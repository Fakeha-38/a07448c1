import React from 'react';
import '../styles/Layout.scss';
import TopNavBar from './TopNavBar';
import ArchiveButtons from './ArchiveButtons';

const Layout = ({ children, archiveAllCalls, unarchiveAllCalls }) => {
  console.log("Rendering Layout component");

  return (
    <div className="layout">
      <TopNavBar />
      <ArchiveButtons
        onArchiveAll={archiveAllCalls}
        onUnarchiveAll={unarchiveAllCalls}
      />
      {children}
    </div>
  );
};

export default Layout;
