import React from 'react';
import Layout from '../components/Layout';
import CallsFeed from '../components/CallsFeed';
import { useCallsData } from '../hooks/useCallsData';
import '../styles/HomePage.scss';
import { organizeCalls } from '../utils/SortData';



const HomePage = () => {
  const { activities, isLoading, archiveCall } = useCallsData();
  // console.log("Rendering HOME PAGE");
  const { unarchived } = organizeCalls(activities);

  return (
    <Layout >
      <CallsFeed activities={activities} isLoading={isLoading} archiveCall={archiveCall} callsToDisplay={unarchived} />
    </Layout>
  );
};

export default HomePage;
