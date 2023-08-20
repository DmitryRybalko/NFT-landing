import styled from "styled-components";

type TextStyledProps = {
  color?: string;
  maxW?: string;
  lineH?: string;
  fontF?: string;
  fWeight?: string;
  fSize?: string;
  margin?: string;
};

export const TextStyled = styled.p<TextStyledProps>`
  color: ${(props) => props.color || "#FFFFFD"};
  font-weight: ${(props) => props.fWeight || "400"};
  line-height: ${(props) => props.lineH || "160%"};
  font-size: ${(props) => props.fSize || "16px"};
  font-family: ${(props) => props.fontF || "Inter Regular"};
  margin: ${(props) => props.margin || "0px"};
  max-width: ${(props) => props.maxW || "none"};
`;
