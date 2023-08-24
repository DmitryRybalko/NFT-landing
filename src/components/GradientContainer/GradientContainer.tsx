import styled from "styled-components";
import { ReactNode } from "react";

type GradientContainerPropsType = {
  children?: ReactNode;
};

const GradientContainer = ({ children }: GradientContainerPropsType) => {
  return <GradientContainerStyled>{children}</GradientContainerStyled>;
};

export default GradientContainer;

const GradientContainerStyled = styled.div<GradientContainerPropsType>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  padding: 24px;
  z-index: 1;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    2deg,
    rgba(19, 30, 58, 0.92) 0%,
    rgba(19, 30, 58, 0) 94.62%
  );
`;
