import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    display: flex;
    gap: 8px;
    align-items: center;
    background-color: ${({ theme }) =>
      theme["gray-600"]};
    padding: 0 1rem;
    border-radius: 8px;

    & input {
      width: 100%;
      padding: 1rem;
      background-color: ${({ theme }) =>
        theme["gray-600"]};
      border: 0;
      color: ${({ theme }) => theme["white"]};
      outline: none;
    }

    > i {
      cursor: pointer;
    }

    svg {
      color: ${({ theme }) => theme["green-300"]};

      svg:hover {
        color: ${({ theme }) =>
          theme["white"]};
      }
    }
  }
`;
