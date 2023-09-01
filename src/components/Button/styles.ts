import styled from 'styled-components';

export const Container = styled.button`
  padding: 0 2rem;
  height: 48px;
  border: 1px solid
    ${({ theme }) => theme["white"]};
  background-color: transparent;
  border-radius: 8px;
  color: ${({ theme }) => theme["white"]};
  transition: background-color 0.5s, color 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme["white"]};
    color: ${({ theme }) => theme["green-300"]};
  }
`;