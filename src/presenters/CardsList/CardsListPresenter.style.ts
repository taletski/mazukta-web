import styled from "styled-components";

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;
    height: 100%;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;

    & > div {
      margin-top: 2px;
      margin-bottom: 2px;
    }
  `,
};
