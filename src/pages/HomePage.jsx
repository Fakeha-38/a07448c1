import React from 'react';
import Layout from '../components/Layout';
import CallsFeed from '../components/CallsFeed';
import { useCallsData } from '../hooks/useCallsData';
import '../styles/HomePage.scss';
import { organizeCalls } from '../utils/SortData';

const HomePage = () => {
  const { activities, isLoading, archiveCall, archiveAllCalls, unarchiveAllCalls } = useCallsData();
  const { unarchived } = organizeCalls(activities);
  console.log("Rendering HOME PAGE");
  return (
    <Layout archiveAllCalls={archiveAllCalls} unarchiveAllCalls={unarchiveAllCalls}>
      <CallsFeed 
        activities={activities} 
        isLoading={isLoading} 
        archiveCall={archiveCall} 
        callsToDisplay={unarchived}
      />
    </Layout>
  );
};

export default HomePage;
