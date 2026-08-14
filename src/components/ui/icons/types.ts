export interface IconProps {
  className?: string;
}

export const Icons = {
  Moon: "moon",
  Plus: "plus",
  Sun: "sun",
  Trash: "trash",
} as const;

export type Icons = (typeof Icons)[keyof typeof Icons];
