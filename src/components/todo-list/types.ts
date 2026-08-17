type TaskProgress = "Pending" | "In Progress" | "Completed" | "Overdue";

function getTaskProgress(date: string, checked: boolean): TaskProgress {
  if (checked) return "Completed";

  const taskDate = new Date(date);
  const today = new Date();

  taskDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  if (taskDate > today) return "Pending";

  if (taskDate.getTime() === today.getTime()) return "In Progress";

  return "Overdue";
}

export default getTaskProgress;
