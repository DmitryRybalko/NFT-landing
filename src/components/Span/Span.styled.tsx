import styled from "styled-components";

type SpanStyledProps = {
  color?: string;
  fontW?: string;
  fontSize?: string;
  margin?: string;
};

export const SpanStyled = styled.span<SpanStyledProps>`
  color: ${(props) => props.color || "#D3F85A"};
  font-weight: ${(props) => props.fontW || "400"};
  margin: ${(props) => props.margin || "0px"};
  font-size: ${(props) => props.fontSize || "inherit"};
`;
