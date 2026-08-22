import { useState } from "react";
import PlusIcon from "../ui/icons/plus";
import { useTask } from "@/context/TaskContext";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover";
import { Button } from "../ui/Button";
import DateCalendarIcon from "../ui/icons/date-calendar";
import { Calendar } from "../ui/Calendar";

function TodoForm() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState<Date | undefined>();

  console.log(typeof taskDate);

  const { addTask } = useTask();

  function handleTask(title: string) {
    if (!title || !taskDate) return;

    addTask(title, taskDate);
    setTaskTitle("");
    setTaskDate(undefined);
  }

  return (
    <div className="rounded-xl border-2 border-border p-8 sm:p-[2.4rem] shadow-sm">
      <h2 className="mb-[1.6rem] text-[1.8rem] font-semibold">Add Task</h2>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="What needs to be done?"
            className="h-[4.4rem] w-full rounded-xl border-2 border-border bg-surface px-[1.4rem] text-[1.4rem] outline-none placeholder:text-text-secondary focus:border-primary sm:flex-1 pr-18"
          />

          <Popover>
            <PopoverTrigger
              render={
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-2 top-1/2 -translate-y-1/2 active:-translate-y-1/2! pr-6"
                >
                  <DateCalendarIcon className="size-[2.2rem] text-primary" />
                </Button>
              }
            />

            <PopoverContent className="bg-surface border-2 border-border ring-0">
              <Calendar
                mode="single"
                selected={taskDate}
                onSelect={setTaskDate}
              />
            </PopoverContent>
          </Popover>
        </div>

        <button
          type="button"
          className="flex h-14 sm:h-[4.4rem] w-full items-center justify-center gap-[0.4rem] rounded-xl bg-primary px-[1.4rem] text-[1.4rem] font-medium text-surface hover:bg-primary-hover sm:w-auto cursor-pointer transition-all duration-400"
          onClick={() => handleTask(taskTitle)}
        >
          <PlusIcon className="size-[1.8rem]" />
          <span>Add Task</span>
        </button>
      </div>
    </div>
  );
}

export default TodoForm;
