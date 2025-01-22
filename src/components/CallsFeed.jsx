import React, { useState } from 'react';
import CallCard from './CallCard';
import CallDetail from './CallDetail'; 

const CallsFeed = ({ activities, isLoading, archiveCall, callsToDisplay }) => {
  
  console.log('****CallsFeed received updated activities:*****', activities);
  //I HAVE TO REMOVE THIS USE EFFECT
  // useEffect(() => {
  // }, [activities]);
  
  const [selectedCall, setSelectedCall] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleCallClick = (call) => {
    setSelectedCall(call); 
    setIsModalOpen(true); 
  };

  const handleModalClose = () => {
    setIsModalOpen(false); 
    setSelectedCall(null);
  };

  if (isLoading) return <div>Loading...</div>;

  const handleArchiveToggle = (id, newArchiveStatus) => {
  archiveCall(id, newArchiveStatus);
  };

  return (
    <div className="call-list">
      {callsToDisplay.length === 0 ? (
        <h2>No Calls to Display!!</h2>
      ) : (
        callsToDisplay.map((group) => (
          <div key={group.date} className="call-date-group">
            <div className="call-date">{group.date}</div>
            {group.calls.map((call) => (
              <CallCard 
                key={call.id} 
                activity={call} 
                onArchive={handleArchiveToggle}
                handleCallClick={handleCallClick}
              />
            ))}
          </div>
        ))
      )}
      {isModalOpen && <CallDetail call={selectedCall} onClose={handleModalClose} />}

    </div>
  );
};

export default CallsFeed;
