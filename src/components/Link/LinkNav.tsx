import styled from "styled-components";

type LinkNavPropsType = {
  text?: string;
  hrefTo?: string;
};

const LinkNav = ({ text, hrefTo }: LinkNavPropsType) => {
  return (
    <LinkNavStyled target="_blank" href={hrefTo}>
      {text}
    </LinkNavStyled>
  );
};

export default LinkNav;

const LinkNavStyled = styled.a<LinkNavPropsType>`
  position: relative;
  font-size: 16px;
  font-family: "Inter Regular", sans-serif;
  font-weight: 400;
  line-height: 160%;
  color: #fff;
  &::before {
    position: absolute;
    content: "";
    width: 0%;
    bottom: -5px;
    background-color: #d3f85a;
    border-bottom: 1px solid #d3f85a;
    transition: width 0.5s ease;
  }
  &:hover {
    &::before {
      width: 100%;
    }
  }
`;
