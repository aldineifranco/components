import { useEffect, useState } from "react";
import { Container, Content } from "./styles"
import { api } from "../../lib/axios";
import { Input } from "../../components/Input";
import { InputProps } from "../../interfaces/InputProps";

interface DadosProps {
  id: number;
  nome: string;
  email: string;
  profissao: "Dev" | "UX/UI" | "Analista";
}

export const Card = () => {
  const [dados, setDados] = useState<DadosProps[]>([]);
  const [value, setValue] = useState<InputProps[]>([]);

  useEffect(() => {
    async function dadosDb() {
      const response = await api.get('/dadosUsuario');
      setDados(response.data);
    }
    dadosDb()
  }, [])

  function handleChange(e: any) {
    setValue(e.target.value)
  }

  function handleClick(e: any) {
    e.preventDefault();
    console.log(value)
  }

  return (
    <Container>
      <Input onChange={handleChange} onClick={handleClick} />

      {dados.map((item) =>  (
          <Content key={item.id}>
            <div>
              <p>{item.nome}</p>
            </div>
            <div>
              <p>{item.email}</p>
              <span>{item.profissao}</span>
            </div>
          </Content>
        )
      )}


    </Container>
  )
}