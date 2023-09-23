import { ChangeEvent, FormEvent, useState } from "react";
import { CardToDo } from "./CardToDo";
import { Container, InputToDo } from "./styles";

interface ToDoProps {
  text: string;
  id: number;
  completed?: boolean;
}

export function ToDo({text}: ToDoProps) {
  const [todo, setTodo] = useState('');
  const [cardsToDo, setCardsToDo] = useState([''])

  function handleInputToDo(event: ChangeEvent<HTMLInputElement>) {
    setTodo(event.target.value)
  }

  function handleCreateNewToDo(event: FormEvent) {
    event.preventDefault();
    setCardsToDo([...cardsToDo, todo]);
    setTodo('');
  }

  return (
      <Container>
          <InputToDo onSubmit={handleCreateNewToDo}>
            <input type="text" value={todo} onChange={handleInputToDo} />
            <button type="submit">Adidionar</button>
          </InputToDo>
      
      {
        cardsToDo.map((item) => (
          <CardToDo
            key={item}
            text={item} />
        ))
      }
      
      </Container>

  )
}