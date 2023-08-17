import styled from "styled-components";

type SpanStyledProps = {
  color?: string;
};

export const SpanStyled = styled.span<SpanStyledProps>`
  color: ${(props) => props.color || "#D3F85A"};
`;
