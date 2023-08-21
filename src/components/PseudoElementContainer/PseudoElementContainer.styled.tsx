import { ReactNode } from "react";
import styled from "styled-components";

type PseudoElementContainerTypes = {
  children?: ReactNode;
  img?: string;
  pseudoW?: string;
  pseudoH?: string;
  top?: string;
  left?: string;
};

const PseudoElementContainer = ({
  children,
  img,
  pseudoW,
  pseudoH,
  left,
  top,
}: PseudoElementContainerTypes) => {
  return (
    <PseudoElementContainerStyled
      img={img}
      pseudoW={pseudoW}
      pseudoH={pseudoH}
      left={left}
      top={top}
    >
      {children}
    </PseudoElementContainerStyled>
  );
};

export default PseudoElementContainer;

const PseudoElementContainerStyled = styled.div<PseudoElementContainerTypes>`
  position: relative;
  display: flex;
  &::before {
    width: ${(props) => props.pseudoW || "0px"};
    height: ${(props) => props.pseudoH || "0px"};
    content: "";
    position: absolute;
    left: ${(props) => props.left || "0px"};
    top: ${(props) => props.top || "0px"};
    z-index: 2;
    background-image: url(${(props) => props.img});
    background-size: cover;
    border-radius: 24px;
  }
`;
