import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper.styled";
import Logo from "../../components/Logo/Logo";
import SVGicon from "../../components/SVGicon/SVGicon";
import { GridWrapperStyled } from "../../components/GridWrapper/GridWrapper.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterTop>
        <FlexWrapper direction="column">
          <Logo />
          <p>
            Discover NFTs by category, track the latest drop, and and follow the
            collections you love. Enjoy it!
          </p>
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
        <GridWrapperStyled gridTempCol="106px 89px 94px 117px" gap="94px">
          {/*переписать на ul, сделать отдельный компонент*/}
          <FlexWrapper direction="column">
            <div>Explore</div>
            <a href="#">Art Sign In</a>
            <a href="#">Collectibles</a>
            <a href="#">Domain Name</a>
            <a href="#">Utility</a>
          </FlexWrapper>
          <FlexWrapper direction="column">
            <div>Statistic</div>
            <a href="#">Ranking</a>
            <a href="#">Collectibles</a>
            <a href="#">Activity</a>
          </FlexWrapper>
          <FlexWrapper direction="column">
            <div>Company</div>
            <a href="#">About Us</a>
            <a href="#">Career</a>
            <a href="#">Support</a>
            <a href="#">Partners</a>
          </FlexWrapper>
          <FlexWrapper direction="column">
            <div>Resources</div>
            <a href="#">Help Center</a>
            <a href="#">Platform Status</a>
            <a href="#">Blog</a>
          </FlexWrapper>
        </GridWrapperStyled>
      </FooterTop>
      <FooterBottom>
        <div>&copy; Copyright 2023 - Creativeart</div>
        <FlexWrapper>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
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
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 48px;
  margin-bottom: 48px;
  border-bottom: 1px solid #838382;
  min-height: 232px;
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
