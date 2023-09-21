import { Container } from "../styles";

export function CardToDo({text}: any) {
  return (
    <Container>
      <div>
        <p>{text}</p>
        <button>Adidionar</button>
      </div>
    </Container>
  )
}