import styled from 'styled-components';

export const Container = styled.div`
  grid-area: main;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;

  > form {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid
      ${({ theme }) => theme["gray-100"]};
    padding: 1rem;
    border-radius: 8px;

    div label {
      display: block;
      margin-bottom: 4px;
    }

    div input {
      width: 100%;
      padding: 0.75rem;
      background-color: ${({ theme }) =>
        theme["gray-700"]};
      color: ${({ theme }) => theme["white"]};
      border: 0;
      border-radius: 4px;
    }

   
    div select {
      width: 100%;
      padding: 0.75rem;
      background-color: ${({ theme }) =>
        theme["gray-700"]};
      color: ${({ theme }) => theme["white"]};
      border-radius: 4px;
    }

  

    button {
      width: 100%;
      padding: 0 2rem;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      border: 1px solid
        ${({ theme }) => theme["gray-700"]};
      background-color: ${({ theme }) =>
        theme["green-700"]};
      color: ${({ theme }) => theme["gray-100"]};
      border-radius: 8px;
      transition: background-color 0.5s,
        color 0.5s;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) =>
          theme["white"]};
        color: ${({ theme }) =>
          theme["green-300"]};
      }
    }

    > pre {
      text-align: center;
    }
  }
`;