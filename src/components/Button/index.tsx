import { Container } from "./styles";
import { ButtonProps } from "../../interfaces/ButtonProps";

export function Button({ title, icon, actived, ...rest }: ButtonProps) {

  return (
    <Container {...rest} actived={actived}>
      <span>{icon}</span>
      <p>{title}</p>
    </Container>
  );
}