import styled from "styled-components";

type GridItemProps = {
  gridCol?: string;
  gridRowEnd?: string;
  width?: string;
  height?: string;
};

export const GridItemStyled = styled.div<GridItemProps>`
  grid-column: ${(props) => props.gridCol || "auto"};
  grid-row-end: ${(props) => props.gridRowEnd || "auto"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
`;
