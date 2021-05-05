import styled from "styled-components";

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100%;
    width: 100%;

    & > div {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  `,
};
