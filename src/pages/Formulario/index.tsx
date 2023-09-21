import { useState } from "react";
import { Container } from "./styles";
import { set, useForm } from 'react-hook-form';
import { api } from "../../lib/axios";



export function Formulario() {
  const { register, handleSubmit } = useForm();
  const [output, setOutput] = useState('');


  const onSubmit = async (data: any) => {
    try {
      const response = await api.post('/dadosUsuario', data);
      if (response.status === 201) {
        setOutput("Dados enviados com sucesso!");
      } else {
        setOutput("Ocorreu um erro ao enviar os dados.");
      }
    } catch(error) {
      setOutput("Ocorreu um erro ao enviar os dados");
      console.error('Erro ao enviar dados:', error);
    }
  }

  return (
    <Container>
      <form>
        <div>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Insira o nome"
            {...register('nome')}
          />
        </div>

        <div>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="Insira o e-mail"
            {...register('email')}
          />
        </div>

        <div>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Insira sua senha"
            {...register('password')}
          />
        </div>

        <div>
          <label>Profissão</label>
          <select
            {...register('profissao')}
          >
            <option value="">Selecione</option>
            <option value="dev">Dev</option>
            <option value="ux-ui">UX/UI</option>
            <option value="analista">Analista</option>
          </select>
        </div>
        <div className="checked-termos">
          <div>
            <input
              type="checkbox"
              {...register('privacyTerms')}
            />
          </div>
          <div>
            <label>Aceite os termos de privacidade</label>
          </div>
        </div>

        <div>
          <button onClick={handleSubmit(onSubmit)}>Criar conta</button>
        </div>
        <pre>
          {output}
        </pre>
      </form>

     
    </Container>
  )
}