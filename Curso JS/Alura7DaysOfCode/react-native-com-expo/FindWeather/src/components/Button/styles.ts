import styled from "styled-components/native";

const Button = styled.TouchableOpacity<{
  backgroundColor: string;
  borderColor: string;
  borderRadius: number;
  height: number;
}>`
  width: 328px;
  height: ${({ height }) => height}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  border-width: 1px;
  border-color: ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  justify-content: center;
`;

export default Button;
