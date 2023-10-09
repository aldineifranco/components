import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > div {
    display: flex;
    gap: 8px;
    align-items: center;

    & input {
      width: 100%;
      padding: 1rem;
      background-color: ${({ theme }) =>
        theme["gray-600"]};
      border: 0;
      color: ${({ theme }) => theme["white"]};
      border-radius: 8px;
    }
  }
`;
