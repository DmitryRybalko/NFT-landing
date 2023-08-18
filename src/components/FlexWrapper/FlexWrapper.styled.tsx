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
  width: ${(props) => props.width || "auto"};
`;
