import styled from "styled-components";

const List = ({ children }: any) => {
  return <StyledUl>{children}</StyledUl>;
};

export default List;

const StyledUl = styled.ul`
  display: flex;
`;
