import { TodoList, type TodoListTypes } from "@/types/todo";
import React, { createContext, useContext, useState } from "react";

interface TaskContextTypes {
  tasks: TodoListTypes[];
  addTask: (title: string) => void;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextTypes | undefined>(undefined);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<TodoListTypes[]>(TodoList);

  const addTask = (title: string) => {
    const taskIds = tasks.map((task) => task.id);

    const newTask = {
      id: Math.max(...taskIds) + 1,
      title: title,
      date: "No Date",
      checked: false,
    };

    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task,
      ),
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  const context = useContext(TaskContext);

  if (context === undefined) {
    throw new Error("useTask must be used within a TaskProvider");
  }

  return context;
}
