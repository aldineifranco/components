
import { Container, Menu } from "./styles";
import { HiMenu, HiTable, HiCheck, HiInbox, HiKey, HiFolder } from "react-icons/hi";

export function Sidebar() {
  
  const menuItem = [
    {
      id: crypto.randomUUID(),
      path: "/",
      name: "Button",
      icon: <HiMenu />
    },
    {
      id: crypto.randomUUID(),
      path: "/card",
      name: "Card",
      icon: <HiCheck />
    },
    {
      id: crypto.randomUUID(),
      path: "/input",
      name: "Input",
      icon: <HiInbox />
    },
    {
      id: crypto.randomUUID(),
      path: "/table",
      name: "Table",
      icon: <HiTable />
    },
    {
      id: crypto.randomUUID(),
      path: "/credenciais",
      name: "Credenciais",
      icon: <HiKey />
    },
    {
      id: crypto.randomUUID(),
      path: "/formulario",
      name: "Formulário",
      icon: <HiFolder />
    },
  ]

  return (
    <>
      <Container>
        {menuItem.map((item) => (
          <Menu to={item.path} key={item.id}>
            <li>
              {item.icon}
              <a>{item.name}</a>
            </li>
          </Menu>
        ))}
      </Container>

    </>
  )
}