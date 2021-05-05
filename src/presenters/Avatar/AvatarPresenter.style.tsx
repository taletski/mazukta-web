import styled from "styled-components";
import { IAvatarPresenterProps } from "./AvatarPresenter.type";

export const S = {
  Avatar: styled.div<IAvatarPresenterProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    width: 40px;
    height: 40px;
    border-radius: 20px;

    background: linear-gradient(
      to bottom,
      ${({ theme, category }) => theme.avatars[category].colors.gradientFrom} 0%,
      ${({ theme, category }) => theme.avatars[category].colors.gradientTo} 100%
    );
  `,
  AvatarContent: styled.span`
    display: block;
  `,
};
