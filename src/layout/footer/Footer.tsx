import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper.styled";
import Logo from "../../components/Logo/Logo";
import SVGicon from "../../components/SVGicon/SVGicon";
import { GridWrapperStyled } from "../../components/GridWrapper/GridWrapper.styled";
import { TextStyled } from "../../components/Text/Text.styled";
import Link from "../../components/Link/Link";
import FooterLinksList from "../../components/Link/FooterLinksList";
import FooterLinksItem from "../../components/Link/FooterLinksItem";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterTop>
        <FlexWrapper width="272px" direction="column">
          <Logo />
          <TextStyled margin="8px 0px 24px 0px">
            Discover NFTs by category, track the latest drop, and and follow the
            collections you love. Enjoy it!
          </TextStyled>
          {/*переписать на ul, сделать отдельный компонент*/}
          <FlexWrapper width="132px" justify="space-between">
            <a href="www.facebook.com" target="_blank">
              <SVGicon
                symbolId="fb"
                width="24px"
                height="24px"
                viewBox="0 0 25 24"
              />
            </a>
            <a href="www.telegram.com" target="_blank">
              <SVGicon
                symbolId="tg"
                width="24px"
                height="24px"
                viewBox="0 0 25 24"
              />
            </a>
            <a href="www.twitter.com" target="_blank">
              <SVGicon
                symbolId="tw"
                width="24px"
                height="24px"
                viewBox="0 0 25 24"
              />
            </a>
            <a href="www.linkedin.com" target="_blank">
              <SVGicon
                symbolId="in"
                width="24px"
                height="24px"
                viewBox="0 0 25 24"
              />
            </a>
          </FlexWrapper>
        </FlexWrapper>
        <GridWrapperStyled gridTempCol="122px 89px 94px 117px" gap="94px">
          {/*переписать на ul, сделать отдельный компонент*/}
          <FooterLinksList title="Explore">
            <FooterLinksItem
              margin="0px 0px 8px 0px"
              text="Art Sign In"
              hrefTo="www.google.com"
              lineH="160%"
            />
            <FooterLinksItem
              margin="0px 0px 8px 0px"
              text="Collectibles"
              hrefTo="www.google.com"
              lineH="160%"
            />
            <FooterLinksItem
              margin="0px 0px 8px 0px"
              text="Domain Name"
              hrefTo="www.google.com"
              lineH="160%"
            />
            <FooterLinksItem
              margin="0px 0px 8px 0px"
              text="Utility"
              hrefTo="www.google.com"
              lineH="160%"
            />
          </FooterLinksList>
          <FooterLinksList title="Statistic">
            <FooterLinksItem
              margin="0px 0px 8px 0px"
              text="Ranking"
              hrefTo="www.google.com"
              lineH="160%"
            />
            <FooterLinksItem
              margin="0px 0px 8px 0px"
              text="Collectibles"
              hrefTo="www.google.com"
              lineH="160%"
            />
            <FooterLinksItem
              margin="0px 0px 8px 0px"
              text="Activity"
              hrefTo="www.google.com"
              lineH="160%"
            />
          </FooterLinksList>
          <FooterLinksList title="Company">
            <FooterLinksItem
              margin="0px 0px 8px 0px"
              text="About Us"
              hrefTo="www.google.com"
              lineH="160%"
            />
            <FooterLinksItem
              margin="0px 0px 8px 0px"
              text="Career"
              hrefTo="www.google.com"
              lineH="160%"
            />
            <FooterLinksItem
              margin="0px 0px 8px 0px"
              text="Support"
              hrefTo="www.google.com"
              lineH="160%"
            />
            <FooterLinksItem
              margin="0px 0px 8px 0px"
              text="Partners"
              hrefTo="www.google.com"
              lineH="160%"
            />
          </FooterLinksList>
          <FooterLinksList title="Resources">
            <FooterLinksItem
              margin="0px 0px 8px 0px"
              text="Help Center"
              hrefTo="www.google.com"
              lineH="160%"
            />
            <FooterLinksItem
              margin="0px 0px 8px 0px"
              text="Platform Status"
              hrefTo="www.google.com"
              lineH="160%"
            />
            <FooterLinksItem
              margin="0px 0px 8px 0px"
              text="Blog"
              hrefTo="www.google.com"
              lineH="160%"
            />
          </FooterLinksList>
        </GridWrapperStyled>
      </FooterTop>
      <FooterBottom>
        <div>&copy; Copyright 2023 - Creativeart</div>
        <FlexWrapper>
          <ul>
            <li>
              <Link hrefTo="www.google.com" text="Privacy Policy" />
            </li>
            <li>
              <Link hrefTo="www.google.com" text="Terms & Conditions" />
            </li>
          </ul>
        </FlexWrapper>
      </FooterBottom>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  a {
    transition: color 0.2s ease;
    &:hover {
      color: #d3f85a;
    }
  }
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 48px;
  margin-bottom: 48px;
  border-bottom: 1px solid #838382;
  min-height: 232px;
  a:hover svg {
    fill: #d3f85a;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 92px;
  ul {
    display: flex;
    list-style: none;
    li {
      :not(:first-child) {
        margin-left: 28px;
      }
    }
  }
`;
