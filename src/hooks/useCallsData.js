import { useState, useEffect } from 'react';
import * as api from '../api/getApiData';

export const useCallsData = () => {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.fetchActivities();
      setActivities(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const archiveCall = async (id) => {
    await api.updateActivityArchiveStatus(id, true);
    setActivities((prevActivities) =>
      prevActivities.map((activity) =>
        activity.id === id ? { ...activity, is_archived: true } : activity
      )
    );
  };

  const unarchiveCall = async (id) => {
    await api.updateActivityArchiveStatus(id, false);
    setActivities((prevActivities) =>
      prevActivities.map((activity) =>
        activity.id === id ? { ...activity, is_archived: false } : activity
      )
    );
  };

  const archiveAllCalls = async () => {
    await Promise.all(
      activities
        .filter((activity) => !activity.is_archived)
        .map((activity) => archiveCall(activity.id))
    );
  };

  const unarchiveAllCalls = async () => {
    await Promise.all(
      activities
        .filter((activity) => activity.is_archived)
        .map((activity) => unarchiveCall(activity.id))
    );
  };

  return {
    activities,
    isLoading,
    archiveCall,
    unarchiveCall,
    archiveAllCalls,
    unarchiveAllCalls,
  };
};
