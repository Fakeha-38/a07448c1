import React from 'react';
import '../styles/Layout.scss';
import TopNavBar from './TopNavBar';
import ArchiveButtons from './ArchiveButtons';
import { useCallsData } from '../hooks/useCallsData';

const Layout = ({ children }) => {
  console.log("Rendering Layout component");
  const { archiveAllCalls, unarchiveAllCalls } = useCallsData();

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
