import { ReactNode } from "react";
import { ButtonProps } from "./ButtonProps";

export interface SidebarButtonProps extends SidebarProps, ButtonProps {
  
}

export interface SidebarProps {
  name?: string;
  id?: number;
  children?: ReactNode;
  active?: boolean;
}
