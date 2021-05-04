import styled from "styled-components";

export const S = {
  Button: styled.button`
    font-size: 14px;
    line-height: 14.56px;
    font-style: normal;
    width: 100%;
    height: 36px;
    border-radius: 4px;

    color: ${({ theme }) => theme.button.colors.label};
    background-color: ${({ theme }) => theme.button.colors.background};

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.button.colors.labelHover};
      background-color: ${({ theme }) => theme.button.colors.backgroundHover};
    }

    &:focus {
      outline: none;
      color: ${({ theme }) => theme.button.colors.labelFocus};
      background-color: ${({ theme }) => theme.button.colors.backgroundFocus};
    }

    &:active {
      color: ${({ theme }) => theme.button.colors.labelActive};
      background-color: ${({ theme }) => theme.button.colors.backgroundActive};
    }
  `,
};
