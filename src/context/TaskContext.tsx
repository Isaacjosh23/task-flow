import { TodoList, type TodoListTypes } from "@/types/todo";
import React, { createContext, useContext, useEffect, useState } from "react";

export type TaskCategory = "All" | "Active" | "Completed";

export const taskCate: TaskCategory[] = ["All", "Active", "Completed"];

interface TaskContextTypes {
  tasks: TodoListTypes[];
  selectedCategory: TaskCategory;
  setSelectedCategory: (cart: TaskCategory) => void;
  onSelectCategory: (category: TaskCategory) => void;
  filteredTasks: TodoListTypes[];
  addTask: (title: string, date: Date) => void;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
  onClearCompleted: () => void;
}

const TaskContext = createContext<TaskContextTypes | undefined>(undefined);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<TodoListTypes[]>(TodoList);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<TaskCategory>("All");

  useEffect(() => {
    const savedTasks = localStorage.getItem("taskflow-tasks");
    console.log("Saved tasks:", savedTasks);

    if (!savedTasks) {
      setIsLoaded(true);
      return;
    }

    let parsedTasks;

    try {
      parsedTasks = JSON.parse(savedTasks);
    } catch {
      setIsLoaded(true);
      return;
    }

    const tasksWithDate = parsedTasks.map((task: TodoListTypes) => ({
      ...task,
      date: new Date(task.date),
      completedAt: task.completedAt ? new Date(task.completedAt) : undefined,
    }));

    setTasks(tasksWithDate);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("taskflow-tasks", JSON.stringify(tasks));
  }, [tasks, isLoaded]);

  const addTask = (title: string, date: Date) => {
    const taskIds = tasks.map((task) => task.id);

    const newTask = {
      id: Math.max(0, ...taskIds) + 1,
      title,
      date,
      checked: false,
    };

    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id !== id) {
          return task;
        }

        if (task.checked) {
          return task;
        }

        return {
          ...task,
          checked: true,
          completedAt: new Date(),
        };
      }),
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (selectedCategory === "All") {
      return true;
    }

    if (selectedCategory === "Active") {
      return !task.checked;
    }

    if (selectedCategory === "Completed") {
      return task.checked;
    }
  });

  const onSelectCategory = (category: TaskCategory) => {
    setSelectedCategory(category);
  };

  const onClearCompleted = () => {
    setTasks(tasks.filter((task) => !task.checked));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        selectedCategory,
        setSelectedCategory,
        onSelectCategory,
        onClearCompleted,
        filteredTasks,
        addTask,
        deleteTask,
        toggleTask,
      }}
    >
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
