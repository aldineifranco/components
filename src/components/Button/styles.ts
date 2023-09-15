import styled, { css } from "styled-components";
import { ButtonProps } from "../../interfaces/ButtonProps";

export const Container = styled.button<ButtonProps>`
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
