import styled from "styled-components";

type HeadingsStyledPropsType = {
  maxW?: string;
  fSize?: string;
  color?: string;
  fFamily?: string;
  fWeight?: string;
  lineH?: string;
  margin?: string;
};

export const Heading = styled.h1<HeadingsStyledPropsType>`
  color: ${(props) => props.color || "#FFF"};
  font-weight: ${(props) => props.fWeight || "500"};
  line-height: ${(props) => props.lineH || "120%"};
  font-size: ${(props) => props.fSize || "32px"};
  font-family: ${(props) => props.fFamily || "Canela Medium"};
  margin: ${(props) => props.margin || "0px"};
  max-width: ${(props) => props.maxW || "auto"};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptopSM}) {
    font-size: 39px;
    max-width: 343px;
    text-align: center;
  }
`;
