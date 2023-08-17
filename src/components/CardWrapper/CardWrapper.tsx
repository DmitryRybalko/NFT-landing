import styled from "styled-components";

const CardWrapper = ({ children, position }: any) => {
  return <CardWrapperStyled position={position}>{children}</CardWrapperStyled>;
};

export default CardWrapper;

type CardWrapperStyledProps = {
  position?: string;
};

const CardWrapperStyled = styled.div<CardWrapperStyledProps>`
  padding: 20px;
  display: flex;
  flex-direction: column;
  //align-items: center;
  //gap: 24px;
  border-radius: 16px;
  border-top: 1px solid#d3f85a;
  background: #131e3a;
  box-shadow: 0px 9px 50px 0px rgba(23, 36, 65, 0.04);
  color: white;
  position: ${(props) => props.position || "static"};
  bottom: 0;
  right: 0;
  div {
    display: flex;
    align-items: center;
  }
`;
