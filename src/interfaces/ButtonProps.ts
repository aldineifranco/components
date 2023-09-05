import { ReactNode } from "react";

export interface ButtonProps {
  title?: string;
  variant?: "primary" | "secondary";
  fill?: "primary" | "secondary";
  icon?: ReactNode;
}
