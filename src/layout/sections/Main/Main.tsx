import styled, { useTheme } from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper.styled";
import Picture from "../../../components/Picture/Picture";
import List from "../../../components/List/List";
import { SpanStyled } from "../../../components/Span/Span.styled";
import ListItem from "../../../components/List/ListItem";
import CardWrapper from "../../../components/CardWrapper/CardWrapper";
import Link from "../../../components/Link/Link";
import { Heading } from "../../../components/headings/Headings.styled";
import { TextStyled } from "../../../components/Text/Text.styled";
import LinksContainer from "../../../components/Link/LinksContainer";
import imgAvif from "../../../assets/img/nft1.avif";
import imgWebp from "../../../assets/img/nft1.webp";
import imgJPG from "../../../assets/img/nft1.jpg";
import pseudoImg from "../../../assets/img/circle.png";
import PseudoElementContainer from "../../../components/PseudoElementContainer/PseudoElementContainer.styled";

const Main = () => {
  const theme = useTheme();

  return (
    <MainStyled>
      <FlexWrapper directionMob="column" justify="space-between">
        <FlexWrapper width="544px" direction={"column"}>
          <Heading
            fSize="64px"
            maxW="540px"
            margin="0px 0px 20px 0px"
            color={theme.colors.fontCol}
          >
            Discover and Collect The Best NFTs{" "}
            <SpanStyled>Digital Art.</SpanStyled>
          </Heading>
          <TextStyled margin="0px 0px 40px 0px">
            Get started with the easiest and most secure platform to buy and
            trade digital ART and NFT's. Start exploring the world of digital
            art and NFTs today and take control of your digital assets with
            confidence!
          </TextStyled>
          <FlexWrapper>
            <LinksContainer margin={"0px 0px 72px 0px"}>
              <Link
                color={theme.colors.bgCol}
                bgColor={theme.colors.primaryCol}
                padding="16px 40px"
                text="Explore Now"
                fontW="700"
                margin="0px 36px 0px 0px"
                hrefTo="www.google.com"
              />
              <Link hrefTo="www.google.com" fontW="700" text="Learn More" />
            </LinksContainer>
          </FlexWrapper>
          <List>
            <ListItem
              margin="0px 94px 0px 0px"
              fSize="48px"
              width="128px"
              height="92px"
              number={"8.9"}
              title={"Art Work"}
            />
            <ListItem
              margin="0px 94px 0px 0px"
              fSize="48px"
              width="128px"
              height="92px"
              number={"65"}
              title={"Artist"}
            />
            <ListItem
              margin="0px 94px 0px 0px"
              fSize="48px"
              width="128px"
              height="92px"
              number={"87"}
              title={"Collection"}
            />
          </List>
        </FlexWrapper>
        <PseudoElementContainer
          top="223px"
          left="-60px"
          img={pseudoImg}
          pseudoW="171px"
          pseudoH="171px"
          animation="spin 5s linear infinite"
        >
          <FlexWrapper position={"relative"}>
            <Picture
              width={"464px"}
              height={"544px"}
              objectFit={"cover"}
              objectPosition={"top"}
              imgAvif={imgAvif}
              imgWebp={imgWebp}
              imgJPG={imgJPG}
            />
            <CardWrapper position="absolute" bottom="-50px" right="-50px">
              <FlexWrapper justify="space-between" mb="24px">
                <FlexWrapper direction="column">
                  <TextStyled
                    color={theme.colors.primaryCol}
                    margin="0px 0px 8px 0px"
                  >
                    Ends in
                  </TextStyled>
                  <TextStyled lineH="120%" fWeight="700">
                    05:45:47
                  </TextStyled>
                </FlexWrapper>
                <FlexWrapper direction="column">
                  <TextStyled
                    color={theme.colors.primaryCol}
                    margin="0px 0px 8px 0px"
                  >
                    Current bid
                  </TextStyled>
                  <TextStyled lineH="120%" fWeight="700">
                    0.24ETH
                  </TextStyled>
                </FlexWrapper>
              </FlexWrapper>
              <Link
                color={theme.colors.primaryCol}
                fontW="700"
                border={`1px solid ${theme.colors.primaryCol}`}
                padding="16px 89px"
                text="Place A Bid"
                hrefTo="www.google.com"
              />
            </CardWrapper>
          </FlexWrapper>
        </PseudoElementContainer>
      </FlexWrapper>
    </MainStyled>
  );
};

export default Main;

const MainStyled = styled.main`
  margin-bottom: 184px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptopSM}) {
    margin-bottom: 80px;
  }
`;
