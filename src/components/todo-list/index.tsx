import { useState } from "react";
import TrashIcon from "../ui/icons/trash";
import DesktopTodoTable from "./DesktopTodoTable";
import MobileTodoList from "./MobileTodoList";
import { TodoList as todoList } from "@/types/todo";

type TaskCategory = "All" | "Active" | "Completed";

const taskCate: TaskCategory[] = ["All", "Active", "Completed"];

function TodoList() {
  const [selectedCategory, setSelectedCategory] = useState<TaskCategory>("All");

  function handleSelectedCategory(category: TaskCategory) {
    setSelectedCategory(category);
  }

  return (
    <div className="rounded-xl border-2 border-border p-8 sm:p-[2.4rem] shadow-sm">
      <div className="grid grid-cols-1 gap-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="whitespace-nowrap text-[1.8rem] font-semibold">
            Your Tasks
          </h2>

          <div className="flex items-center justify-between gap-2 sm:gap-16">
            <p className="whitespace-nowrap text-[1.4rem] font-medium text-text-secondary sm:text-[1.5rem]">
              {todoList.length} {todoList.length > 1 ? "tasks" : "task"}
            </p>

            <button className="flex shrink-0 items-center gap-[0.4rem] whitespace-nowrap rounded-xl border-2 border-border px-3 py-2 text-[1.4rem] font-medium text-danger sm:px-6 sm:py-3 sm:text-[1.5rem]">
              <span>Clear completed</span>
              <TrashIcon className="size-[1.8rem]" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3.5">
          {taskCate.map((cart) => (
            <button
              onClick={() => handleSelectedCategory(cart)}
              key={cart}
              className={`border-2 border-border py-3 px-6 cursor-pointer rounded-xl font-medium text-xl sm:text-[1.5rem] ${selectedCategory === cart ? "bg-primary text-surface border-primary" : "text-text-secondary"}`}
            >
              {cart}
            </button>
          ))}
        </div>
      </div>

      <DesktopTodoTable />
      <MobileTodoList />
    </div>
  );
}

export default TodoList;
