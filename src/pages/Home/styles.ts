import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-columns: 200px auto;
  grid-template-areas:
    "header header"
    "sidebar content";
  background-color: ${({ theme }) =>
    theme["gray-900"]};

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 1rem;
    margin: 0 1rem 1rem;
    border: 1px solid
      ${({ theme }) => theme["gray-700"]};
    border-radius: 8px;
    height: auto;
  }
`;
