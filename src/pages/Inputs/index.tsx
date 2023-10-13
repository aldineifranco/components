import { Container, Content } from "./styles";
import { Input } from "../../components/Input";
import { useState } from "react";
import { RiAB } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { Checkbox } from "../../components/Checkbox";

export function Inputs() {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(true);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    console.log(value)
  }

  function handleClick() {
    setCount(count + 1);
  }

  function handleCheckboxChange() {
    setChecked(!checked);
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

      <Content>
        <Checkbox
          id="opcao-1" 
          onChange={handleCheckboxChange} 
          checked={checked} 
          label="Opção 1" 
          htmlFor="opcao-1" 
        />
      </Content>

    </Container>

  )
}