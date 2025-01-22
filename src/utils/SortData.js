import { format } from 'date-fns';

export const organizeCalls = (calls) => {
  const sortedCalls = calls.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  const groupedCalls = {
    unarchived: [],
    archived: [],
  };
  sortedCalls.forEach((call) => {
    const callDate = new Date(call.created_at);
    const formattedDate = format(callDate, 'yyyy-MM-dd'); 

    const group = call.is_archived ? groupedCalls.archived : groupedCalls.unarchived;
    let dateGroup = group.find(group => group.date === formattedDate);
    if (!dateGroup) {
      dateGroup = { date: formattedDate, calls: [] };
      group.push(dateGroup);
    }
    dateGroup.calls.push(call);
  });

  return groupedCalls;
};
