import { Container } from "./styles";
import { ButtonProps } from "../../interfaces/ButtonProps";
import { FiArchive } from 'react-icons/fi';
import { SidebarProps } from "../../interfaces/SidebarProps";

export function Button({ title, icon, ...rest }: ButtonProps) {


  return (
    <Container {...rest}>
      <span>{icon}</span>
      <p>{title}</p>
    </Container>
  );
}