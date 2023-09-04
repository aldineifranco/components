import { Button } from "../Button";
import { Container, Menu } from "./styles";

export function Sidebar() {
  const menuItem = [
    {
      id: 1,
      path: "/",
      name: "Button",
    },
    {
      id: 2,
      path: "/card",
      name: "Card",
    },
    {
      id: 3,
      path: "/input",
      name: "Input",
    },
    {
      id: 4,
      path: "/table",
      name: "Table",
    },
  ]

  return (
    <Container>
      {menuItem.map((item) => (
        <Menu to={item.path} key={item.id}>
          <Button title={item.name} />
        </Menu>
      ))}
    </Container>
  )
}