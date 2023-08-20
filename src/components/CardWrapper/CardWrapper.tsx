import { ReactNode } from "react";
import styled from "styled-components";

type CardWrapperStyledProps = {
  children?: ReactNode;
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

const CardWrapper = ({
  children,
  position,
  bottom,
  right,
}: CardWrapperStyledProps) => {
  return (
    <CardWrapperStyled bottom={bottom} right={right} position={position}>
      {children}
    </CardWrapperStyled>
  );
};

export default CardWrapper;

const CardWrapperStyled = styled.div<CardWrapperStyledProps>`
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  border-top: 1px solid#d3f85a;
  background: #131e3a;
  position: ${(props) => props.position || "static"};
  bottom: ${(props) => props.bottom || "0"};
  right: ${(props) => props.right || "0"};
`;
