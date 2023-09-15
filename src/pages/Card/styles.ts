import styled from "styled-components";

export const Container = styled.div`
  grid-area: content;
  margin: 2rem 1rem;
  display: flex;
  justify-content: start;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid
    ${({ theme }) => theme["gray-500"]};
  width: 30%;
  border-radius: 8px;
  overflow: hidden;

  > div:nth-child(1) {
    background-color: ${({ theme }) =>
      theme["gray-600"]};
    width: 100%;
    padding: 1rem;
    text-align: center;
  }

  > div:last-child {
    padding: 1rem;
    line-height: 160%;
    text-align: center;
  }
`;
