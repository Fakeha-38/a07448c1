import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../api/getApiData';

const CallDetail = () => {
  console.log("Rendering CALL DEATIL component");

  const { id } = useParams();
  const [callDetail, setCallDetail] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      const data = await api.fetchActivityDetail(id);
      setCallDetail(data);
    };

    fetchDetail();
  }, [id]);

  if (!callDetail) return <div>Loading...</div>;

  return (
    <div>
      <h2>Call Details</h2>
      <p><strong>From:</strong> {callDetail.from}</p>
      <p><strong>To:</strong> {callDetail.to}</p>
      <p><strong>Direction:</strong> {callDetail.direction}</p>
      <p><strong>Duration:</strong> {callDetail.duration} seconds</p>
      <p><strong>Call Type:</strong> {callDetail.call_type}</p>
    </div>
  );
};

export default CallDetail;
