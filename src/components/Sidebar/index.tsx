
import { Button } from "../Button";
import { Container, Menu } from "./styles";
import { HiMenu, HiTable, HiCheck, HiInbox } from "react-icons/hi";
import { SidebarProps } from "../../interfaces/SidebarProps";

export function Sidebar({ active }: SidebarProps) {
  
  const menuItem = [
    {
      id: 1,
      path: "/",
      name: "Button",
      icon: <HiMenu />
    },
    {
      id: 2,
      path: "/card",
      name: "Card",
      icon: <HiCheck />
    },
    {
      id: 3,
      path: "/input",
      name: "Input",
      icon: <HiInbox />
    },
    {
      id: 4,
      path: "/table",
      name: "Table",
      icon: <HiTable />
    },
  ]

  return (
    <>
      <Container>
        {menuItem.map((item) => (
          <Menu to={item.path} key={item.id}>
            <Button title={item.name} icon={item.icon} actived={active}/>
          </Menu>
        ))}
      </Container>

    </>
  )
}