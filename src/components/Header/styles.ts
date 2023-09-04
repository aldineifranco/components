import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  background-color: ${({ theme }) =>
    theme["green-700"]};
  padding: 2rem 1rem;
  border-left: 2px solid
    ${({ theme }) => theme["gray-800"]};
`;
