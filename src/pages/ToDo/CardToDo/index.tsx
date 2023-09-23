import { Mensagem } from "./styles";
import { FiX } from 'react-icons/fi';

interface ToDoProps {
  text: string;
  id: number;
  completed: boolean;
}

export function CardToDo({text, id, completed}: ToDoProps) {
  return (
    <Mensagem>
      <div>
        <p>{text}</p>
        <FiX color='red' cursor='pointer'/>
      </div>
    </Mensagem>
     

  )
}