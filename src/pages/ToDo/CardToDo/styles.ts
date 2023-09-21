import styled from "styled-components";

export const Mensagem = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme['gray-700']};
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme['gray-500']};
  border-radius: 8px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;