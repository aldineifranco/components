import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "menu header"
    "sidebar content";
`;

export const Content = styled.main`
  grid-area: content;
  padding: 1rem;
`;

