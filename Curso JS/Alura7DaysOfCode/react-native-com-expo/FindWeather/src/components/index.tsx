import React, { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";
import StyledButton from "./Button/styles";

export interface IButton extends TouchableOpacityProps {
  children: ReactNode;
  backgroundColor: string;
  borderColor?: string;
  borderRadius: number;
  height: number;
}

const Button = ({
  backgroundColor,
  borderColor = "transparent",
  children,
  borderRadius,
  height,
  ...rest
}: IButton): React.ReactElement => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      height={height}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};


export default Button;
