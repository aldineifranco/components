import { Container } from "./styles";
import { Input } from "../../components/Input";
import { useState } from "react";
import { RiAB } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

export function Inputs() {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    console.log(value)
  }

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <Container>
      <Input 
        onChange={handleChange} 
        type="text"                     
        label="texto"
        iconLeft={<RiAB size={24} />}
      />  

      <Input 
        onChange={handleChange} 
        type="number" 
        label="número"
        iconLeft={<FiSearch size={24} />}
        onClick={handleClick}
      />

      <p>{count} - {value}</p>
    </Container>
  )
}