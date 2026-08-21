import { Checkbox } from "../ui/Checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/Dropdown";
import CalendarIcon from "../ui/icons/calendar";
import DotIcon from "../ui/icons/dots";
import { Table, TableBody, TableCell, TableRow } from "../ui/Table";
import { TodoList as todoTasks } from "@/types/todo";
import getTaskProgress from "./types";

function DesktopTodoTable() {
  return (
    <div className="hidden md:block border-2 border-border mt-10 rounded-xl">
      <Table>
        <TableBody>
          {todoTasks.map((task) => {
            const progress = getTaskProgress(task.date, task.checked);

            return (
              <TableRow key={task.id} className="border-border">
                <TableCell className="p-5">
                  <div className="flex items-center gap-5">
                    <Checkbox
                      checked={task.checked}
                      className="size-[1.8rem] text-white border-border cursor-pointer"
                    />

                    <div className="flex flex-col gap-3">
                      <h3
                        className={`${progress === "Completed" ? "line-through text-text-secondary" : ""} text-2xl font-medium`}
                      >
                        {task.title}
                      </h3>

                      <div className="flex items-center gap-2.5">
                        <CalendarIcon className="size-[1.4rem] text-text-secondary" />

                        <p className="text-[1.2rem] text-text-secondary">
                          {progress === "Completed"
                            ? `Completed on ${task.completedAt}`
                            : `${task.date}`}
                        </p>
                      </div>
                    </div>
                  </div>
                </TableCell>

                <TableCell className="p-5">
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
                </TableCell>

                <TableCell className="p-5">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="p-3 hover:text-surface hover:bg-text-secondary cursor-pointer transition-colors rounded-full flex items-center">
                      <DotIcon className="size-6" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="bg-surface border-2 border-border ring-0 shadow-md rounded-xl p-5 w-40">
                      <DropdownMenuItem className="text-[1.2rem] hover:bg-text-secondary/30 cursor-pointer font-medium">
                        Edit
                      </DropdownMenuItem>

                      <DropdownMenuItem className="text-[1.2rem] hover:bg-danger/30 text-danger cursor-pointer font-medium">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default DesktopTodoTable;
