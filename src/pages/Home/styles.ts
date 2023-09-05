import styled from "styled-components";
import { SidebarProps } from "../../interfaces/SidebarProps";

export const Container = styled.div<SidebarProps>`
  display: grid;
  grid-template-columns: ${({ active = true }) =>
    active ? "250px auto" : "60px auto"};
  grid-template-rows: 105px auto;
  grid-template-areas:
    "menu header"
    "sidebar content";
`;

export const Content = styled.main`
  grid-area: content;
  padding: 1rem;
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
