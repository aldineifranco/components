import { CardToDo } from "./CardToDo";
import { Container } from "./styles";

export function ToDo() {
  return (
    <Container>
      <div>
        <input type="text" />
        <button>Adidionar</button>
      </div>

      <CardToDo />
    </Container>
  )
}