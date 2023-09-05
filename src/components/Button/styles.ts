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
    ${({ theme, variant }) =>
      variant === "primary"
        ? theme["gray-700"]
        : theme["white"]};
  background-color: ${({
    theme,
    variant
  }) =>
    variant === "primary"
      ? theme["green-700"]
      : theme["white"] };
  border-radius: 8px;
  color: ${({ theme, variant }) =>
    variant === "primary"
      ? theme["white"]
      : theme["green-700"]};
  transition: background-color 0.5s, color 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme["white"]};
    color: ${({ theme }) => theme["green-300"]};
  }
`;
