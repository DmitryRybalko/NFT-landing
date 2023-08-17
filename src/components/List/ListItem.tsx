import styled from "styled-components";
import { SpanStyled } from "../Span/Span.styled";

type ListItemType = {
  number: string;
  title: string;
};

const ListItem = ({ number, title }: ListItemType) => {
  return (
    <ListItemStyled>
      <div>
        <SpanStyled>{number}</SpanStyled>K
      </div>
      <span>{title}</span>
    </ListItemStyled>
  );
};

export default ListItem;

const ListItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  div {
    margin-bottom: 0px;
  }
`;
