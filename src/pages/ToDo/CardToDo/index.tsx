import { Mensagem } from "./styles";
import { FiX } from 'react-icons/fi';

interface ToDoProps {
  text?: string;
  id?: number;
  onDeleteComment: (text: string) => void;
}

export function CardToDo({text}: ToDoProps) {
  return (
    <Mensagem>
      <div>
        <p>{text}</p>
        <FiX color='red' cursor='pointer'/>
      </div>
    </Mensagem>
     

  )
}