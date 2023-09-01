import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) =>
    theme["gray-900"]};

`;
