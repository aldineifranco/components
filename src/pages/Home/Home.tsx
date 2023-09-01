import { Container } from "./styles"
import { Sidebar } from "../../components/Sidebar";
import { Nav } from "../../components/Nav";

export function Home() {
  return (
      <Container>
        <Nav />
        <Sidebar />

        <main>
          <div>oi</div>
        </main>
      </Container>
  )
}
