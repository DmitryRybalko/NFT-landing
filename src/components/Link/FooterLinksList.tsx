import React, { ReactNode } from "react";
import { SpanStyled } from "../Span/Span.styled";
import { FlexWrapper } from "../FlexWrapper/FlexWrapper.styled";
import styled, { useTheme } from "styled-components";

type FooterLinksListPropsType = {
  children?: ReactNode;
  title?: string;
};

const FooterLinksList = ({ children, title }: FooterLinksListPropsType) => {
  const theme = useTheme();
  return (
    <FlexWrapper align="flex-start" direction="column">
      <SpanStyled
        margin="0px 0px 24px 0px"
        fontW="700"
        color={theme.colors.whiteCol}
        fontSize="20px"
      >
        {title}
      </SpanStyled>
      <FooterLinksListStyled>{children}</FooterLinksListStyled>
    </FlexWrapper>
  );
};

export default FooterLinksList;

const FooterLinksListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
