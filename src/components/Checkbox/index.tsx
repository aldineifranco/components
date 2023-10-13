import { Container } from "./styles";

interface CheckBoxProps {
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  htmlFor?: string;
  id?: string;
}

export function Checkbox({ onChange, checked, label, htmlFor, id }: CheckBoxProps) {
  return (
    <Container>      
        <input
          id={id}
          type="checkbox"
          onChange={onChange}
          checked={checked}
        />
      <label htmlFor={htmlFor}>{label}</label>
    </Container>
  )
}
