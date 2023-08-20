import { useTheme } from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper.styled";
import Link from "../../../components/Link/Link";
import LinksContainer from "../../../components/Link/LinksContainer";
import Picture from "../../../components/Picture/Picture";
import Section from "../../../components/Section/Section";
import { SpanStyled } from "../../../components/Span/Span.styled";
import { TextStyled } from "../../../components/Text/Text.styled";
import { Heading } from "../../../components/headings/Headings.styled";
import imgAvif from "../../../assets/img/nft6.avif";
import imgWebp from "../../../assets/img/nft6.webp";
import imgJPG from "../../../assets/img/nft6.jpg";

const NftSection = () => {
  const theme = useTheme();
  return (
    <Section>
      <FlexWrapper justify="space-between" align="center">
        <FlexWrapper direction={"column"} width="426px">
          <Heading as={"h2"} maxW="426px" fSize="48px" margin="0 0 20px 0">
            Create And Sell Your <SpanStyled>Best NFTs</SpanStyled>
          </Heading>
          <TextStyled margin="0px 0px 40px 0px">
            Start exploring the world of digital art and NFTs today and take
            control of your digital assets with confidence!
          </TextStyled>
          <FlexWrapper>
            <LinksContainer margin={"0px 0px 72px 0px"}>
              <Link
                color={theme.colors.bgCol}
                bgColor={theme.colors.primaryCol}
                padding="16px 40px"
                text="Create Now"
                fontW="700"
                margin="0px 36px 0px 0px"
                hrefTo="www.google.com"
              />
              <Link hrefTo="www.google.com" fontW="700" text="Learn More" />
            </LinksContainer>
          </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper>
          <Picture
            width={"410px"}
            height={"475px"}
            objectFit={"cover"}
            objectPosition={"top"}
            position={"relative"}
            imgAvif={imgAvif}
            imgWebp={imgWebp}
            imgJPG={imgJPG}
          />
        </FlexWrapper>
      </FlexWrapper>
    </Section>
  );
};

export default NftSection;
