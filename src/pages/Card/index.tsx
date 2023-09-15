import { useEffect, useState } from "react";
import { Container, Content } from "./styles"
import { api } from "../../lib/axios";

interface DadosProps {
  id: number;
  nome: string;
  email: string;
  profissao: "Dev" | "UX/UI" | "Analista";
}

export const Card = () => {
  const [dados, setDados] = useState<DadosProps[]>([]);



  useEffect(() => {
    async function dadosDb() {
      const response = await api.get('/dadosUsuario');
      setDados(response.data);
    }
    dadosDb()
  }, [])
  

  return (
    <Container>
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