import styled from "styled-components";

export const S = {
  Card: styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 76px;
    border-radius: 8px;

    color: ${({ theme }) => theme.card.colors.text};
    background-color: ${({ theme }) => theme.card.colors.background};
  `,
  AvatarContainer: styled.div`
    flex: 0 0 auto;
    margin-right: 16px;
    margin-left: 16px;
  `,
  TextContainer: styled.div`
    flex: 1 1 256px;
    height: 100%;
    box-sizing: border-box;
  `,
  TextHeader: styled.h6`
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.0015em;
    margin-top: 16px;
    margin-bottom: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  TextMessage: styled.p`
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.0025em;
    margin-top: 0;
    margin-right: 15px;
    margin-bottom: 9px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
};
