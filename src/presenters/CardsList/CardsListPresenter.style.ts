import styled from "styled-components";

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;
    height: 100%;
    width: 100%;
    overflow-y: scroll;

    & > div {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  `,
};
