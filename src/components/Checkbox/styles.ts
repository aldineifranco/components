import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & input {
    all: unset;
    border: 1px solid
      ${({ theme }) => theme["white"]};
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 4px;
  }

  & input[type="checkbox"]:checked {
    background-color: ${({ theme }) =>
      theme["green-500"]};
    width: 20px;
    height: 20px;
  }
`;