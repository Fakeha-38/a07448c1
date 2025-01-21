import React from 'react';

const CallCard = ({ activity }) => {
  console.log("Rendering CALL CARD");
  return (
    <div className="call-card">
      
      <p><strong>From:</strong> {activity.from}</p>
      <p><strong>To:</strong> {activity.to}</p>
      <p><strong>Call Type:</strong> {activity.call_type}</p>
      <p><strong>Duration:</strong> {activity.duration} seconds</p>
      <button>View Details</button>
    </div>
  );
};

export default CallCard;
