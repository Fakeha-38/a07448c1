import React from 'react';
import Layout from '../components/Layout';
import CallsFeed from '../components/CallsFeed';
import '../styles/HomePage.scss';
import { useCallsData } from '../hooks/useCallsData';
import { organizeCalls } from '../utils/SortData';

const ArchivedPage = () => {
  const { activities, isLoading, archiveCall } = useCallsData();
  // console.log("Rendering ARCHIVED PAGE");
  const { archived } = organizeCalls(activities);

  return (
    <Layout >
      <CallsFeed activities={activities} isLoading={isLoading} archiveCall={archiveCall} callsToDisplay={archived} />
      </Layout>
  );
};

export default ArchivedPage;
