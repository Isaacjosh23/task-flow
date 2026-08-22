export interface TodoListTypes {
  id: number;
  title: string;
  date: Date;
  checked: boolean;
  completedAt?: Date;
}

export const TodoList: TodoListTypes[] = [
  {
    id: 1,
    title: "Design the TaskFlow UI",
    date: new Date("August 14, 2026 10:30 AM"),
    checked: false,
  },

  {
    id: 2,
    title: "Implement add and delete functionality",
    date: new Date("August 17, 2026"),
    checked: false,
  },

  {
    id: 3,
    title: "Add local storage support",
    date: new Date("August 20, 2026"),
    checked: false,
  },

  {
    id: 4,
    title: "Write README documentation",
    date: new Date("August 14, 2026"),
    checked: false,
  },
];
