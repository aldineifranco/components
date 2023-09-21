import { SidebarProps } from "../../interfaces/SidebarProps";
import { Container } from "./styles";



export const Header = ({ children }: SidebarProps) => {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  )
}