import styled from "styled-components";

export const Container = styled.aside`
  grid-area: sidebar;
  background-color: ${({ theme }) =>
    theme["green-500"]};
  border-radius: 8px;

  > div {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    gap: 0.5rem;
  }
`;
