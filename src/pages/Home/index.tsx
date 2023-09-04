import { Container, Content } from "./styles";
import { SidebarProps } from "../../interfaces/SidebarProps";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export function Home({ children }: SidebarProps) {


  return (
    <>
      <Container>
        <Header />
        
        <Sidebar />

        <Content>
          {children}
        </Content>
      </Container>
    </>
  )
}