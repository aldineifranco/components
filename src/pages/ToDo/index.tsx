import { useState } from "react";
import { CardToDo } from "./CardToDo";
import { Container, InputToDo } from "./styles";

export function ToDo() {
  const [todo, setTodo] = useState('');
  const [cardsToDo, setCardsToDo] = useState([''])

  function handleInputToDo(e: any) {
    setTodo(e.target.value)
  }

  function handleAddToDo() {
    setCardsToDo(todo);
  }

  return (
      <Container>
          <InputToDo>
            <input type="text" value={todo} onChange={handleInputToDo}/>
            <button onClick={handleAddToDo}>Adidionar</button>
      </InputToDo>
      
      {
        cardsToDo.map((item) => (
          <CardToDo text={item} />
        ))
      }
      
      </Container>

  )
}