import { Container } from "./styles";
import { ButtonProps } from "../../interfaces/ButtonProps";

export const Button = ({ title }: ButtonProps) => {
  return (
    <Container>
      {title}
    </Container>
  )
}