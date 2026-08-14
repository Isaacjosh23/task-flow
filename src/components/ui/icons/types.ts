export interface IconProps {
  className?: string;
}

export const Icons = {
  Sun: "sun",
  Moon: "moon",
} as const;

export type Icons = (typeof Icons)[keyof typeof Icons];
