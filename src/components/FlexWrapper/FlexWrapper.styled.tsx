import styled from "styled-components";

type FlexWrapperProps = {
  direction?: string;
  justify?: string;
  align?: string;
  position?: string;
  wrap?: string;
  mb?: string;
  gap?: string;
  width?: string;
  bgC?: string;
  padding?: string;
  directionMob?: string;
  orderMob?: string;
};

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  position: ${(props) => props.position || "static"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  margin-bottom: ${(props) => props.mb || "0px"};
  gap: ${(props) => props.gap || "0px"};
  max-width: ${(props) => props.width || "none"};
  padding: ${(props) => props.padding || "0px"};
  background-color: ${(props) => props.bgC || "transparent"};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptopSM}) {
    flex-direction: ${(props) => props.directionMob};
    gap: 0px;
    align-items: center;
    justify-content: center;
    //background-color: green;
    order: ${(props) => props.orderMob || "transparent"};
  }
`;
