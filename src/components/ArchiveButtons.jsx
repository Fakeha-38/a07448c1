import React from 'react';
import '../styles/Layout.scss';

const ArchiveButtons = ({ onArchiveAll, onUnarchiveAll }) => {
  return (
    <div className="archive-buttons">
      <button onClick={onArchiveAll} className="btn-archive-all">
        Archive All Calls
      </button>
      <button onClick={onUnarchiveAll} className="btn-unarchive-all">
        Unarchive All Calls
      </button>
    </div>
  );
};

export default ArchiveButtons;
