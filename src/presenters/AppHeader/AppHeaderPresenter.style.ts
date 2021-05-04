import styled from "styled-components";

export const S = {
  MainHeader: styled.h1`
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.0015em;
    color: ${({ theme }) => theme.header.colors.text};

    width: 100%;
    height: 100%;
  `,
};