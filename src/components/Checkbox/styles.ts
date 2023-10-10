import styled from "styled-components";

export const Container = styled.div`
   cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid
    ${({ theme }) => theme["gray-300"]};
  padding: 0.5rem;
  border-radius: 4px;

  &:not(:has(:checked)) {
    opacity: 0.6;
  }

  & input {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid
      ${({ theme }) => theme["white"]};
    border-radius: 4px;
    display: inline-block;
    cursor: pointer;
  }

  & input[type="checkbox"]:checked {
    background-color: ${({ theme }) =>
      theme["green-500"]};
    width: 20px;
    height: 20px;
  }

  & label {
    cursor: pointer;
  }
`;