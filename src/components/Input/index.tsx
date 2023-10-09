import { ReactNode } from "react";
import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";


interface InputProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  label: string;
  iconLeft?: ReactNode;
  iconRight?: boolean;
  maxLength?: number;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function Input({ type, onChange, label, iconLeft, iconRight, onClick }: InputProps) {
  return (
    <Container>
      <label>{label}</label>
      <div>
        <span>{iconLeft}</span>
        <input type={type} onChange={onChange} />
        <a onClick={onClick}><FiSearch /></a>
      </div>
    </Container>
  )
}