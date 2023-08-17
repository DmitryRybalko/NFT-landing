import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper.styled";
import Picture from "../../../components/Picture/Picture";
import List from "../../../components/List/List";
import { SpanStyled } from "../../../components/Span/Span.styled";
import ListItem from "../../../components/List/ListItem";
import CardWrapper from "../../../components/CardWrapper/CardWrapper";
import Link from "../../../components/Link/Link";

const Main = () => {
  return (
    <MainStyled>
      <FlexWrapper justify="space-between">
        <FlexWrapper direction={"column"}>
          <h1>
            Discover and Collect The Best NFTs{" "}
            <SpanStyled>Digital Art.</SpanStyled>
          </h1>
          <p>
            Get started with the easiest and most secure platform to buy and
            trade digital ART and NFT's. Start exploring the world of digital
            art and NFTs today and take control of your digital assets with
            confidence!
          </p>
          <FlexWrapper>
            <a href="#">Explore Now</a>
            <a href="#">Learn More</a>
          </FlexWrapper>
          <List>
            <ListItem number={"8.9"} title={"Art Work"} />
            <ListItem number={"65"} title={"Artist"} />
            <ListItem number={"87"} title={"Collection"} />
          </List>
        </FlexWrapper>
        <FlexWrapper position={"relative"}>
          <Picture
            width={"464px"}
            height={"544px"}
            objectFit={"cover"}
            objectPosition={"top"}
            position={"relative"}
          />
          <CardWrapper position={"absolute"}>
            <FlexWrapper justify="space-between">
              <FlexWrapper direction="column">
                <span>Ends in</span>
                <span>05:45:47</span>
              </FlexWrapper>
              <FlexWrapper direction="column">
                <span>Current bid</span>
                <span>0.24ETH</span>
              </FlexWrapper>
            </FlexWrapper>
            <Link text={"Place A Bid"} />
          </CardWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </MainStyled>
  );
};

export default Main;

const MainStyled = styled.main`
  margin-bottom: 184px;
`;
