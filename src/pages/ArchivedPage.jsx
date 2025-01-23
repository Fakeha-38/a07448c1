import React from 'react';
import Layout from '../components/Layout';
import CallsFeed from '../components/CallsFeed';
import '../styles/HomePage.scss';
import { useCallsData } from '../hooks/useCallsData';
import { organizeCalls } from '../utils/SortData';

const ArchivedPage = () => {
  const { activities, isLoading, archiveCall, archiveAllCalls, unarchiveAllCalls } = useCallsData();
  const { archived } = organizeCalls(activities);
  console.log("Rendering ARCHIVED PAGE");
  return (
    <Layout archiveAllCalls={archiveAllCalls} unarchiveAllCalls={unarchiveAllCalls}>
      <CallsFeed 
        activities={activities} 
        isLoading={isLoading} 
        archiveCall={archiveCall} 
        callsToDisplay={archived}
      />
    </Layout>
  );
};

export default ArchivedPage;
