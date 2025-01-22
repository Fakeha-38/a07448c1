const BASE_URL = "https://aircall-api.onrender.com";

//Fetch all activitoes from the URL
export const fetchActivities = async () => {
  const response = await fetch(`${BASE_URL}/activities`);
  if (!response.ok) {
    throw new Error("Failed to fetch activities");
  }
  const data = await response.json();
  console.log("All calls activity: ", data);
  return data;
};

//Toggle archive stats of each activity
export const updateActivityArchiveStatus = async (id, isArchived) => {
  const response = await fetch(`${BASE_URL}/activities/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ is_archived: isArchived }),
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to update archive status: ${errorText}`);
  }
  const text = await response.text();
  console.log("Response from server: ", "#",text,"#");
  return text;
};

//resettig status for all calls
export const resetActivities = async () => {
  const response = await fetch(`${BASE_URL}/reset`, { method: 'PATCH' });
  if (!response.ok) {
    throw new Error("Failed to reset activities");
  }
  const data = await response.json();
  console.log("Resetting activities: ", data);
  return data;
};
