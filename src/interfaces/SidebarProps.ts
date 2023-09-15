import { ReactNode } from "react";

export interface SidebarProps {
  name?: string;
  id?: number;
  children?: ReactNode;
  active?: boolean;
}
