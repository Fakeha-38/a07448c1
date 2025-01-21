const BASE_URL = "https://aircall-api.onrender.com";

export const fetchActivities = async () => {
  const response = await fetch(`${BASE_URL}/activities`);
  const data = await response.json();
  console.log("All calls activity: ", data);

  return data;
};

export const fetchActivityDetail = async (id) => {
  const response = await fetch(`${BASE_URL}/activities/${id}`);
  const data = await response.json();

  console.log("Each Call detail: ", data);

  return data;
};

export const updateActivityArchiveStatus = async (id, isArchived) => {
  const response = await fetch(`${BASE_URL}/activities/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ is_archived: isArchived }),
  });
  const data = await response.json();
  console.log("Archivestatus for particular call: ", data);
  return data;
};

export const resetActivities = async () => {
  const response = await fetch(`${BASE_URL}/reset`, { method: 'PATCH' });
  console.log("Sending response to reset ", response);
  return await response.json();
};
