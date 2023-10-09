import { ReactNode } from "react";

export interface InputProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  label?: string;
  iconLeft?: ReactNode;
  iconRight?: boolean;
  maxLength?: number;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
