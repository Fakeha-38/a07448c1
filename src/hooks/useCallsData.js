import { useState, useEffect } from 'react';
import * as api from '../api/getApiData';
// import { organizeCalls } from '../utils/SortData';

export const useCallsData = () => {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.fetchActivities(); // Fetch calls from API
      setActivities(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  //toggle the archive status, response not json
  const archiveCall = async (id, newArchiveStatus) => {
    try {
      const response = await api.updateActivityArchiveStatus(id, newArchiveStatus); 
      if (response === "Call had been updated.") {
        setActivities((prevActivities) =>
          prevActivities.map((activity) =>
            activity.id === id ? { ...activity, is_archived: newArchiveStatus } : activity
          )
        );
        // console.log("Activity archived/unarchived successfully:", response, newArchiveStatus);
      } else {
        console.error('Failed to archive/unarchive activity:', response);
      }
    } catch (error) {
      console.error('Error updating archive status:', error);
    }
  };

  const archiveAllCalls = async () => {
    try {
      const unarchivedCalls = activities.filter((call) => !call.is_archived);
      await Promise.all(
        unarchivedCalls.map((call) =>
          api.updateActivityArchiveStatus(call.id, true)
        )
      );
        setActivities((prevActivities) => {
        const updatedActivities = prevActivities.map((call) => ({ ...call, is_archived: true }));
        console.log('Updated activities after archiving all:', updatedActivities);
        return updatedActivities;
      });
    } catch (error) {
      console.error('Error archiving all calls:', error);
    }
  };
  
  const unarchiveAllCalls = async () => {
    try {
      const archivedCalls = activities.filter((call) => call.is_archived);
      await Promise.all(
        archivedCalls.map((call) =>
          api.updateActivityArchiveStatus(call.id, false)
        )
      );
        setActivities((prevActivities) => {
        const updatedActivities = prevActivities.map((call) => ({ ...call, is_archived: false }));
        console.log('Updated activities after unarchiving all:', updatedActivities);
        return updatedActivities;
      });
    } catch (error) {
      console.error('Error unarchiving all calls:', error);
    }
  };
    
  return {
    activities,
    isLoading,
    archiveCall,
    // unarchiveCall,
    archiveAllCalls,
    unarchiveAllCalls,
  };
};
