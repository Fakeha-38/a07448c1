import React from 'react';
import '../styles/CallDetails.scss';

const CallDetail = ({ call, onClose }) => {
  if (!call) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{call.direction} Call</h2>
        <div className="modal-details">
          <p><strong>From:</strong> {call.from}</p>
          <p><strong>To:</strong> {call.to}</p>
          <p><strong>Status:</strong> {call.call_type}</p>
          <p><strong>Date & Time:</strong> {new Date(call.created_at).toLocaleString()}</p>
          <p><strong>Status:</strong> {call.is_archived ? 'Archived' : 'Unarchived'}</p>
        </div>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default CallDetail;
