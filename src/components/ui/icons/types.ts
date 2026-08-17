export interface IconProps {
  className?: string;
}

export const Icons = {
  Calendar: "calendar",
  Dot: "dot",
  Moon: "moon",
  Plus: "plus",
  Sun: "sun",
  Trash: "trash",
} as const;

export type Icons = (typeof Icons)[keyof typeof Icons];
