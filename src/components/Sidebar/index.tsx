import { Button } from "../Button";
import { Container } from "./styles";

export function Sidebar() {
  return (
    <Container>
      <div>
        <Button title="Button"/>
        <Button title="Card"/>
        <Button title="Input"/>
        <Button title="Table"/>
      </div>
    </Container>
  )
}