import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";
import { InputProps } from "../../interfaces/InputProps";



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