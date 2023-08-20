import { useTheme } from "styled-components";
import CardWrapper from "../../../components/CardWrapper/CardWrapper";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper.styled";
import Link from "../../../components/Link/Link";
import Picture from "../../../components/Picture/Picture";
import SVGicon from "../../../components/SVGicon/SVGicon";
import Section from "../../../components/Section/Section";
import { SpanStyled } from "../../../components/Span/Span.styled";
import { Heading } from "../../../components/headings/Headings.styled";
import imgCard1Avif from "../../../assets/img/nft2.avif";
import imgCard1Webp from "../../../assets/img/nft2.webp";
import imgCard1JPG from "../../../assets/img/nft2.jpg";
import imgCard2Avif from "../../../assets/img/nft3.avif";
import imgCard2Webp from "../../../assets/img/nft3.webp";
import imgCard2JPG from "../../../assets/img/nft3.jpg";
import imgCard3Avif from "../../../assets/img/nft4.avif";
import imgCard3Webp from "../../../assets/img/nft4.webp";
import imgCard3JPG from "../../../assets/img/nft4.jpg";

const ArtSection = () => {
  const theme = useTheme();
  return (
    <Section>
      <FlexWrapper justify="space-between" mb={"64px"} align="center">
        <Heading as={"h2"} maxW="506px" fSize="48px">
          <SpanStyled>Amazing</SpanStyled> and Super Unique Art of This{" "}
          <SpanStyled>Week</SpanStyled>
        </Heading>
        <Link
          color={theme.colors.bgCol}
          bgColor={theme.colors.primaryCol}
          padding="12px 40px"
          fontW="700"
          hrefTo="www.google.com"
          text="See All"
        />
      </FlexWrapper>
      <FlexWrapper wrap={"wrap"} gap={"30px"}>
        <CardWrapper>
          <Picture
            objectPosition={"top"}
            objectFit={"cover"}
            width="370px"
            height="340px"
            mb="24px"
            imgAvif={imgCard1Avif}
            imgWebp={imgCard1Webp}
            imgJPG={imgCard1JPG}
          />
          <FlexWrapper mb={"16px"} justify="space-between" align="center">
            <Heading
              fFamily="Inter Regular"
              color={theme.colors.fontCol}
              fWeight="700"
              fSize="24px"
              as={"h3"}
            >
              Cyberpunk Cocomo
            </Heading>
            <FlexWrapper>
              <SVGicon
                width="24px"
                height="24px"
                viewBox="0 0 24 25"
                symbolId={"eth"}
              />
              <SpanStyled fontW="700" color={theme.colors.fontCol}>
                490ETH
              </SpanStyled>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper justify="space-between">
            <FlexWrapper direction="column">
              <SpanStyled margin="0px 0px 4px" color={theme.colors.fontColDark}>
                Ending in
              </SpanStyled>
              <FlexWrapper>
                <SVGicon
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 25"
                  symbolId={"clock"}
                />
                <SpanStyled
                  margin="0px 0px 0px 12px"
                  color={theme.colors.fontCol}
                  fontW="700"
                >
                  03:24:56
                </SpanStyled>
              </FlexWrapper>
            </FlexWrapper>
            <Link
              color={theme.colors.primaryCol}
              fontW="700"
              border={`1px solid ${theme.colors.primaryCol}`}
              padding="12px 40px"
              text="Place A Bid"
              hrefTo="www.google.com"
            />
          </FlexWrapper>
        </CardWrapper>
        <CardWrapper>
          <Picture
            objectPosition={"50% 15%"}
            objectFit={"cover"}
            width="370px"
            height="340px"
            mb="24px"
            imgAvif={imgCard2Avif}
            imgWebp={imgCard2Webp}
            imgJPG={imgCard2JPG}
          />
          <FlexWrapper mb={"16px"} justify="space-between" align="center">
            <Heading
              fFamily="Inter Regular"
              color={theme.colors.fontCol}
              fWeight="700"
              fSize="24px"
              as={"h3"}
            >
              Charge, Qi tiao yu
            </Heading>
            <FlexWrapper>
              <SVGicon
                width="24px"
                height="24px"
                viewBox="0 0 24 25"
                symbolId={"eth"}
              />
              <SpanStyled fontW="700" color={theme.colors.fontCol}>
                490ETH
              </SpanStyled>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper justify="space-between">
            <FlexWrapper direction="column">
              <SpanStyled margin="0px 0px 4px" color={theme.colors.fontColDark}>
                Ending in
              </SpanStyled>
              <FlexWrapper>
                <SVGicon
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 25"
                  symbolId={"clock"}
                />
                <SpanStyled
                  margin="0px 0px 0px 12px"
                  color={theme.colors.fontCol}
                  fontW="700"
                >
                  03:24:56
                </SpanStyled>
              </FlexWrapper>
            </FlexWrapper>
            <Link
              color={theme.colors.primaryCol}
              fontW="700"
              border={`1px solid ${theme.colors.primaryCol}`}
              padding="12px 40px"
              text="Place A Bid"
              hrefTo="www.google.com"
            />
          </FlexWrapper>
        </CardWrapper>
        <CardWrapper>
          <Picture
            objectPosition={"top"}
            objectFit={"cover"}
            width="370px"
            height="340px"
            mb="24px"
            imgAvif={imgCard3Avif}
            imgWebp={imgCard3Webp}
            imgJPG={imgCard3JPG}
          />
          <FlexWrapper mb={"16px"} justify="space-between" align="center">
            <Heading
              fFamily="Inter Regular"
              color={theme.colors.fontCol}
              fWeight="700"
              fSize="24px"
              as={"h3"}
            >
              Surgeon, Josh Rife
            </Heading>
            <FlexWrapper>
              <SVGicon
                width="24px"
                height="24px"
                viewBox="0 0 24 25"
                symbolId={"eth"}
              />
              <SpanStyled fontW="700" color={theme.colors.fontCol}>
                490ETH
              </SpanStyled>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper justify="space-between">
            <FlexWrapper direction="column">
              <SpanStyled margin="0px 0px 4px" color={theme.colors.fontColDark}>
                Ending in
              </SpanStyled>
              <FlexWrapper>
                <SVGicon
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 25"
                  symbolId={"clock"}
                />
                <SpanStyled
                  margin="0px 0px 0px 12px"
                  color={theme.colors.fontCol}
                  fontW="700"
                >
                  03:24:56
                </SpanStyled>
              </FlexWrapper>
            </FlexWrapper>
            <Link
              color={theme.colors.primaryCol}
              fontW="700"
              border={`1px solid ${theme.colors.primaryCol}`}
              padding="12px 40px"
              text="Place A Bid"
              hrefTo="www.google.com"
            />
          </FlexWrapper>
        </CardWrapper>
      </FlexWrapper>
    </Section>
  );
};

export default ArtSection;
