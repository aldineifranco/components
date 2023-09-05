import { Container, Content, Bars } from "./styles";
import { SidebarProps } from "../../interfaces/SidebarProps";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";

export function Home({ children }: SidebarProps) {
  const [sidebar, setSidebar] = useState(false);


  const handleShowSidebar = () => {
    setSidebar(!sidebar)
  }
  return (
    <>
      <Container active={sidebar}>
        <Header />

        <Bars>
          <HiMenu size={32} onClick={handleShowSidebar} />
        </Bars>
        
        <Sidebar />

        <Content>
          {children}
        </Content>
      </Container>
    </>
  )
}