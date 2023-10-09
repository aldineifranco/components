import { ReactNode } from "react";
import { Container } from "./styles";


interface InputProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  label: string;
  icon?: ReactNode;
}

export function Input({ type, onChange, label, icon }: InputProps) {
  return (
    <Container>
      <label>{label}</label>
      <div>
        {icon} 
        <input type={type} onChange={onChange} />
      </div>
    </Container>
  )
}