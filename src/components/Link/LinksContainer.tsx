import styled from "styled-components";

const LinksContainer = ({ children }: any) => {
  return <LinksContainerStyled>{children}</LinksContainerStyled>;
};

export default LinksContainer;

const LinksContainerStyled = styled.div`
  display: flex;
`;
