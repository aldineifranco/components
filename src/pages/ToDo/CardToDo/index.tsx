import { Mensagem } from "./styles";
import { FiX } from 'react-icons/fi';

export function CardToDo({text}: any) {
  return (
    <Mensagem>
      <div>
        <p>{text}</p>
        <FiX color='red' cursor='pointer'/>
      </div>
    </Mensagem>
     

  )
}