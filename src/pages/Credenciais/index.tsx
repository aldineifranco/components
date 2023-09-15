import { useForm } from "react-hook-form";
import { Container } from "./styles";
import { useState } from "react";

export function Credenciais() {
  const { register, handleSubmit } = useForm()
  const [ output, setOutput ] = useState('')

  const handleCreatePassword = (data: any) => {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <Container>
      <div>
        <h2>Credenciais</h2>

        <form >
          <input typeof="password" placeholder="Informe sua senha" {...register('password')} />
          <input typeof="password" placeholder="Confirme sua senha" {...register('password')}/>

          <button type="submit" onSubmit={handleSubmit(handleCreatePassword)}>Enviar</button>
        </form>
      </div>
      <pre>{output}</pre>
    </Container>

  )
}