import styled from "styled-components";

type GridWrapperProps = {
  gridTempCol?: string;
  gridTempRow?: string;
  gap?: string;
};

export const GridWrapperStyled = styled.div<GridWrapperProps>`
  display: grid;
  gap: ${(props) => props.gap || "0px"};
  grid-template-rows: ${(props) => props.gridTempRow || "none"};
  grid-template-columns: ${(props) => props.gridTempCol || "none"};
`;
