import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SidebarProps } from "../../interfaces/SidebarProps";

export const Container = styled.aside`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) =>
    theme["green-700"]};
  grid-area: sidebar;
`;

export const Menu = styled(NavLink)<SidebarProps>`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 1.5rem;
  text-decoration: none;

  > div {
    list-style: none;
    color: ${({ theme }) => theme["white"]};
    display: flex;
    justify-content: center;
    padding: 0 1rem;
    gap: 8px;
    align-items: center;
    font-size: 1.25rem;
  }

  div:hover {
    color: ${({ theme }) => theme["gray-100"]};
  }

  .show-text {
    display: block;
  }

  .hide-text {
    display: none;
  }
`;

