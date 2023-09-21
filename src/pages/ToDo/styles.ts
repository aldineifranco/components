import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    gap: 1rem;
    padding: 2rem;
    border: 1px solid
      ${({ theme }) => theme["gray-500"]};
    border-radius: 8px;
    background-color: ${({ theme }) =>
      theme["gray-700"]};

    input {
      border: 1px solid
        ${({ theme }) => theme["gray-500"]};
      border-radius: 4px;
      padding: 0.5rem;
      width: 100%;
      background-color: ${({ theme }) =>
        theme["gray-900"]};
      color: ${({ theme }) => theme["gray-100"]};
    }

    button {
      border: none;
      background: ${({ theme }) =>
        theme["green-500"]};
      color: ${({ theme }) => theme["white"]};
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;