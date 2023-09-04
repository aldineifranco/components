import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) =>
    theme["green-500"]};
  grid-area: sidebar;
`;

export const Menu = styled(NavLink)`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 0.5rem;
  text-decoration: none;
`;