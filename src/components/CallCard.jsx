import { MdPhoneMissed, MdArchive, MdUnarchive } from 'react-icons/md';
import { BsFillTelephoneInboundFill, BsFillTelephoneOutboundFill } from 'react-icons/bs';
import '../styles/CallCard.scss';

const CallCard = ({ activity, onArchive, handleCallClick }) => {

  const { call_type, direction, from, to, created_at, is_archived } = activity;

  const getCallIcon = () => {
    if (call_type === 'missed') return <MdPhoneMissed className="call-icon missed" />;
    if (direction === 'inbound') return <BsFillTelephoneInboundFill className="call-icon inbound" />;
    return <BsFillTelephoneOutboundFill className="call-icon outbound" />;
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  // console.log("***Archive Status before click: ", is_archived);
  return (
    <div className="call-card">
      <div className="icon-wrapper">{getCallIcon()}</div>
      <div className="call-details" onClick={() => handleCallClick(activity)}>
        <div className="from-number">{from}</div>
        <div className="to-number">To: {to}</div>
      </div>
      <div className="call-time">{formatTime(created_at)}</div>
      <button
        className={`archive-button ${is_archived ? 'archived' : ''}`}
        onClick={() => onArchive(activity.id, !is_archived)}
        title={is_archived ? 'Unarchive Call' : 'Archive Call'}
      >
        {is_archived ? <MdUnarchive /> : <MdArchive />}
      </button>
    </div>
  );
};

export default CallCard;
