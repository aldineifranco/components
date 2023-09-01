import { Container } from "./styles";

interface ButtonProps {
  title: string;
}

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <Container {...rest}>
      { title }
    </Container>
  )
}