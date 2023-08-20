import styled from "styled-components";
import { SpanStyled } from "../Span/Span.styled";
import { TextStyled } from "../Text/Text.styled";

type ListItemType = {
  number?: string;
  title?: string;
  width?: string;
  height?: string;
  fSize?: string;
  fWeight?: string;
  fFamily?: string;
  lineH?: string;
  margin?: string;
};

const ListItem = ({
  number,
  title,
  width,
  fSize,
  fWeight,
  fFamily,
  margin,
  height,
}: ListItemType) => {
  return (
    <ListItemStyled
      fSize={fSize}
      fWeight={fWeight}
      fFamily={fFamily}
      margin={margin}
      width={width}
      height={height}
    >
      <div>
        <SpanStyled>{number}</SpanStyled>K
      </div>
      <TextStyled>{title}</TextStyled>
    </ListItemStyled>
  );
};

export default ListItem;

const ListItemStyled = styled.li<ListItemType>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => props.width || "auto"};
  font-size: ${(props) => props.fSize || "16px"};
  font-weight: ${(props) => props.fWeight || "500"};
  font-family: ${(props) => props.lineH || "Canela Medium"};
  line-height: ${(props) => props.lineH || "120%"};
  margin: ${(props) => props.margin || "0px"};
  padding-right: 28px;
  min-height: ${(props) => props.height || "auto"};
  &:not(:last-child) {
    border-right: 1px solid #d3f85a;
  }
`;
