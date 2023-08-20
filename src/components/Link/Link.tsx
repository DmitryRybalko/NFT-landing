import styled from "styled-components";

type LinkPropsType = {
  text?: string;
  hrefTo?: string;
  padding?: string;
  bgColor?: string;
  color?: string;
  fontW?: string;
  lineH?: string;
  margin?: string;
  border?: string;
};

const Link = ({
  text,
  padding,
  bgColor,
  color,
  fontW,
  lineH,
  margin,
  hrefTo,
  border,
}: LinkPropsType) => (
  <LinkStyled
    fontW={fontW}
    lineH={lineH}
    color={color}
    bgColor={bgColor}
    padding={padding}
    margin={margin}
    href={hrefTo}
    border={border}
  >
    {text}
  </LinkStyled>
);

export default Link;

const LinkStyled = styled.a<LinkPropsType>`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: ${(props) => props.color || "#FFF"};
  padding: ${(props) => props.padding || "0px"};
  background-color: ${(props) => props.bgColor || "transparent"};
  font-weight: ${(props) => props.fontW || "400"};
  line-height: ${(props) => props.lineH || "120%"};
  margin: ${(props) => props.margin || "0px"};
  border: ${(props) => props.border || "none"};
`;
