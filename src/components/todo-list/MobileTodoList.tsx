import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";

import { TodoList as todoTasks } from "@/types/todo";
import { Checkbox } from "../ui/Checkbox";
import CalendarIcon from "../ui/icons/calendar";
import getTaskProgress from "./types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/Dropdown";
import DotIcon from "../ui/icons/dots";

function MobileTodoList() {
  return (
    <div className="flex flex-col justify-center gap-6 mt-10 md:hidden">
      {todoTasks.map((task) => {
        const progress = getTaskProgress(task.date, task.checked);

        return (
          <Card key={task.id} className="border-2 border-border ring-0">
            <CardHeader className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <Checkbox
                    checked={task.checked}
                    className="size-7 shrink-0 text-surface border-border cursor-pointer"
                  />

                  <CardTitle
                    className={`${progress === "Completed" ? "line-through text-text-secondary" : ""} text-xl font-medium`}
                  >
                    {task.title}
                  </CardTitle>
                </div>

                <CardAction>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="p-3 hover:text-surface hover:bg-text-secondary cursor-pointer transition-colors rounded-full flex items-center">
                      <DotIcon className="size-6" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="bg-surface border-2 border-border ring-0 shadow-md rounded-xl p-5 w-40">
                      <DropdownMenuItem className="text-[1.2rem] hover:bg-text-secondary/30 cursor-pointer font-medium">
                        Edit
                      </DropdownMenuItem>

                      <DropdownMenuItem className="text-[1.2rem] hover:bg-text-secondary/30 cursor-pointer font-medium">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardAction>
              </div>

              <div className="flex items-center gap-2">
                <CalendarIcon className="size-[1.4rem] text-text-secondary" />

                <CardDescription>
                  <p className="text-[1.2rem] text-text-secondary">
                    {progress === "Completed"
                      ? `Completed on ${task.completedAt}`
                      : `${task.date}`}
                  </p>
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              {progress === "Completed" && (
                <p className="inline-flex text-[1.2rem] font-medium text-success bg-success/30 p-2.5 rounded-xl">
                  {progress}
                </p>
              )}

              {progress === "In Progress" && (
                <p className="inline-flex text-[1.2rem] font-medium text-warning bg-warning/30 p-2.5 rounded-xl">
                  {progress}
                </p>
              )}

              {progress === "Pending" && (
                <p className="inline-flex text-[1.2rem] font-medium text-primary bg-primary/30 p-2.5 rounded-xl">
                  {progress}
                </p>
              )}

              {progress === "Overdue" && (
                <p className="inline-flex text-[1.2rem] font-medium text-danger bg-danger/30 p-2.5 rounded-xl">
                  {progress}
                </p>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default MobileTodoList;
