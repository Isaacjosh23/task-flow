export interface TodoListTypes {
  id: number;
  title: string;
  date: string;
  checked: boolean;
  completedAt?: string;
}

export const TodoList: TodoListTypes[] = [
  {
    id: 1,
    title: "Design the TaskFlow UI",
    date: "August 14, 2026 10:30 AM",
    checked: true,
    completedAt: "August 15, 2026 • 10:30 AM",
  },

  {
    id: 2,
    title: "Implement add and delete functionality",
    date: "August 17, 2026",
    checked: false,
  },
  {
    id: 3,
    title: "Add local storage support",
    date: "August 20, 2026",
    checked: false,
  },
  {
    id: 4,
    title: "Write README documentation",
    date: "August 14, 2026",
    checked: false,
  },
];
