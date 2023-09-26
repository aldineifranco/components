import styled from "styled-components";
import { SidebarProps } from "../../interfaces/SidebarProps";

export const Container = styled.div<SidebarProps>`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: ${({ active }) =>
    active ? "200px auto" : "60px auto"};
  grid-template-rows: 105px auto;
  grid-template-areas:
    "menu header"
    "sidebar content";
`;

export const Content = styled.main`
  grid-area: content;
  padding: 0 1rem;
  margin: 0;
`;

export const Bars = styled.div`
  grid-area: menu;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    theme["green-700"]};
  cursor: pointer;

`;
