import React from "react";
import isEqual from "lodash.isequal";
import { ButtonProps } from "./Button.type";
import { S } from "./Button.style";

const ButtonComponent: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ label, ...props }) => {
  return <S.Button {...props}>{label}</S.Button>;
};

export const Button = React.memo(ButtonComponent, isEqual);
