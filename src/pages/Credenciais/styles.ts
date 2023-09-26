import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: ${({ theme }) =>
      theme["gray-700"]};
    padding: 2rem;
    border-radius: 8px;
  }

  form {
    min-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  form > input {
    padding: 1rem;
    background-color: ${({ theme }) =>
      theme["gray-600"]};
    border: 0;
    color: ${({ theme }) => theme["white"]};
    border-radius: 8px;
  }

  form > button {
    background-color: ${({ theme }) =>
      theme["green-500"]};
    border: 0;
    padding: 1rem;
    font-weight: bold;
    font-size: 1.25rem;
    color: ${({ theme }) => theme["white"]};
    border-radius: 8px;
  }

  form > button:hover {
    filter: brightness(0.9);
  }
`;