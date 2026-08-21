import { TodoList as todoTasks } from "@/types/todo";
import { Progress } from "./ui/Progress";

function TaskProgress() {
  const total = todoTasks.length;

  const taskDone = todoTasks.filter((task) => task.checked).length;

  const taskPercentage = (taskDone / total) * 100;

  return (
    <div className="border-2 border-border rounded-xl p-8 sm:p-[2.4rem] shadow-sm flex items-center justify-between">
      <div className="flex flex-col gap-3">
        <h2 className="text-[1.8rem] font-semibold">Progress</h2>

        <p className="text-[1.4rem] sm:text-[1.5rem] text-text-secondary">
          {taskDone} of {total} {total > 1 ? "tasks" : "task"} completed
        </p>
      </div>

      <div className="flex items-center gap-8 w-full max-w-360">
        <Progress value={taskPercentage} className="flex-1" />

        <span className="text-[1.5rem] font-medium">
          {Math.round(taskPercentage)}%
        </span>
      </div>
    </div>
  );
}

export default TaskProgress;
