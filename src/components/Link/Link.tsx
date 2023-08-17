import styled from "styled-components";

type LinkPropsType = {
  text: string;
};

const Link = ({ text }: LinkPropsType) => {
  return <LinkStyled>{text}</LinkStyled>;
};

export default Link;

const LinkStyled = styled.a`
  text-decoration: none;
`;
