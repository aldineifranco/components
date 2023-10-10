import { SidebarProps } from "../../interfaces/SidebarProps";
import { Container, Menu } from "./styles";
import { HiMenu, HiTable, HiCheck, HiInbox, HiKey, HiFolder, HiChat, HiOutlineCheck } from "react-icons/hi";
import { FiCheckSquare } from "react-icons/fi";

export function Sidebar({ showSidebar }: SidebarProps) {
  
  const menuItem = [
    {
      id: crypto.randomUUID(),
      path: "/",
      name: "Button",
      icon: <HiMenu />,
    },
    {
      id: crypto.randomUUID(),
      path: "/card",
      name: "Card",
      icon: <HiCheck />,
    },
    {
      id: crypto.randomUUID(),
      path: "/input",
      name: "Input",
      icon: <HiInbox />, 
    },
    {
      id: crypto.randomUUID(),
      path: "/table",
      name: "Table",
      icon: <HiTable />,
    },
    {
      id: crypto.randomUUID(),
      path: "/credenciais",
      name: "Credenciais",
      icon: <HiKey />,
    },
    {
      id: crypto.randomUUID(),
      path: "/formulario",
      name: "Formulário",
      icon: <HiFolder />,
    },
    {
      id: crypto.randomUUID(),
      path: "/todo",
      name: "ToDo",
      icon: <HiChat />,
    },
  ]

  return (
    <>
      <Container>
        {menuItem.map((item) => (
          <Menu to={item.path} key={item.id} active>
            <div>
              <span>{item.icon}</span> 
              <p className={showSidebar ? 'show-text' : 'hide-text' }>{item.name}</p>
            </div>
          </Menu>
        ))}
      </Container>

    </>
  )
}