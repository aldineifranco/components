import { Container } from "./styles";

interface CheckBoxProps {
  label?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
  for: string;
}

export function Checkbox({ onChange, checked, label }: CheckBoxProps) {
  return (
    <Container>      
        <input
          type="checkbox"
          onChange={onChange}
          checked={checked}
          id="checkbox-1"
        />
        <label>{label}</label>
    </Container>
  )
}
