import { Container, Content } from "./styles"

import { Button } from "../../components/Button"

export function ButtonPage() {
  return (
    <Container>
      <Content>
        <h2>Button Primary</h2>
        <Button title="Clique Aqui" variant="secondary" />
          
      </Content>
    </Container>
  )
}