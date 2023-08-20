import styled from "styled-components";

type LinksContainerStyledProps = {
  margin?: string;
};

const LinksContainer = ({ children, margin }: any) => {
  return (
    <LinksContainerStyled margin={margin}>{children}</LinksContainerStyled>
  );
};

export default LinksContainer;

const LinksContainerStyled = styled.div<LinksContainerStyledProps>`
  display: flex;
  margin: ${(props) => props.margin || "0px"};
`;
