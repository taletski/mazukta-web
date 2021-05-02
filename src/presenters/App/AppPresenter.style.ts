import styled from "styled-components";

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.background.colors.gradientFrom} 0%,
      ${({ theme }) => theme.background.colors.gradientTo} 100%
    );
  `,
  Content: styled.main`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    height: 100%;
    max-width: 500px;
    margin-left: 15px;
    margin-right: 15px;
  `,
  HeaderContainer: styled.header`
    flex: 0 0 40px;
    margin-top: 16px;
    margin-bottom: 22px;
  `,
  CardsContainer: styled.div`
    flex: 1 1 auto;
  `,
  ButtonContainer: styled.div`
    flex: 0 0 35px;
    margin-top: 16px;
    margin-bottom: 16px;
  `,
};
