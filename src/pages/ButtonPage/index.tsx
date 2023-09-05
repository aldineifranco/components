import { Container, Content } from "./styles"

import { Button } from "../../components/Button"

export function ButtonPage() {
  return (
    <Container>
      <Content>
        <h2>Button Primary</h2>
        <Button title="Primary" variant="primary" />
      </Content>

      <Content>
        <h2>Button Secondary</h2>
        <Button title="Secondary" variant="secondary" />
      </Content>

      <Content>
        <h2>Button Outline Primary</h2>
        <Button title="Secondary" fill="primary" />
      </Content>

      <Content>
        <h2>Button Outline Secondary</h2>
        <Button title="Secondary" fill="secondary" />
      </Content>
    </Container>
  )
}