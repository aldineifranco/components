import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { CardToDo } from "./CardToDo";
import { Container, InputToDo } from "./styles";

interface ToDoProps {
  text: string;
  id: number;
  completed?: boolean;
}

export function ToDo() {
  const [todo, setTodo] = useState('');
  const [cardsToDo, setCardsToDo] = useState([''])

  function handleInputToDo(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setTodo(event.target.value)
  }

  function handleCreateNewToDo(event: FormEvent) {
    event.preventDefault();
    setCardsToDo([...cardsToDo, todo]);
    setTodo('');
    console.log(cardsToDo)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function handleDeleteComment(commentToDelete: string) {
    setCardsToDo(cardsToDo.filter((item) => item !== commentToDelete));
  }

  return (
      <Container>
          <InputToDo onSubmit={handleCreateNewToDo}>
            <input 
              type="text" 
              value={todo} 
              onChange={handleInputToDo}
              onInvalid={handleNewCommentInvalid}
            />
            <button type="submit">Adidionar</button>
          </InputToDo>
      
      {
        cardsToDo.map((item) => (
          <CardToDo
            key={item}
            text={item}
            onDeleteComment={handleDeleteComment}
          />
        ))
      }
      </Container>

  )
}