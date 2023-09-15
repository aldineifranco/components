import { Container } from "./styles";
import { ButtonProps } from "../../interfaces/ButtonProps";

export function Button({ title, icon, variant, ...rest }: ButtonProps) {

  return (
    <Container {...rest} variant={variant}>
      <span>{icon}</span>
      <p>{title}</p>
    </Container>
  );
}