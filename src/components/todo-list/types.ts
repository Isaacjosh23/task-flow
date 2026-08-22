type TaskProgress = "Pending" | "In Progress" | "Completed" | "Overdue";

function getTaskProgress(date: Date, checked: boolean): TaskProgress {
  if (checked) return "Completed";

  const taskDate = new Date(date);
  const today = new Date();

  taskDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  if (taskDate > today) return "Pending";

  if (taskDate.getTime() === today.getTime()) return "In Progress";

  return "Overdue";
}

export function formatTaskDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
export function formatCompletedDate(date: Date | undefined) {
  return date?.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default getTaskProgress;
