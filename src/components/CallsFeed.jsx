import React from 'react';
import { useCallsData } from '../hooks/useCallsData';
import CallCard from './CallCard';

const ActivityFeed = () => {
  const {
    activities,
    isLoading,
    archiveAllCalls,
    unarchiveAllCalls,
  } = useCallsData();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Activity Feed</h2>
      <button onClick={archiveAllCalls}>All Calls</button>
      <button onClick={unarchiveAllCalls}>Unarchive All Calls</button>
      <div>
        {activities
          .filter((activity) => !activity.is_archived)
          .map((activity) => (
            <CallCard key={activity.id} activity={activity} />
          ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
