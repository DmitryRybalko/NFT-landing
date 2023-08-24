import { useTheme } from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper.styled";
import { GridItemStyled } from "../../../components/GridItem/GridItem.styled";
import { GridWrapperStyled } from "../../../components/GridWrapper/GridWrapper.styled";
import Link from "../../../components/Link/Link";
import Picture from "../../../components/Picture/Picture";
import Section from "../../../components/Section/Section";
import { SpanStyled } from "../../../components/Span/Span.styled";
import { Heading } from "../../../components/headings/Headings.styled";
import img1Avif from "../../../assets/img/nft11.avif";
import img1Webp from "../../../assets/img/nft11.webp";
import img1JPG from "../../../assets/img/nft11.jpg";
import img2Avif from "../../../assets/img/nft7.avif";
import img2Webp from "../../../assets/img/nft7.webp";
import img2JPG from "../../../assets/img/nft7.jpg";
import img3Avif from "../../../assets/img/nft8.avif";
import img3Webp from "../../../assets/img/nft8.webp";
import img3JPG from "../../../assets/img/nft8.jpg";
import img4Avif from "../../../assets/img/nft9.avif";
import img4Webp from "../../../assets/img/nft9.webp";
import img4JPG from "../../../assets/img/nft9.jpg";
import img5Avif from "../../../assets/img/nft10.avif";
import img5Webp from "../../../assets/img/nft10.webp";
import img5JPG from "../../../assets/img/nft10.jpg";
import artist1 from "../../../assets/img/artist1.jpg";
import artist2 from "../../../assets/img/artist2.jpg";
import artist3 from "../../../assets/img/artist3.jpg";
import artist4 from "../../../assets/img/artist4.jpg";
import artist5 from "../../../assets/img/artist5.jpg";
import GradientContainer from "../../../components/GradientContainer/GradientContainer";
const ArtistsSection = () => {
  const theme = useTheme();
  return (
    <Section>
      <FlexWrapper justify="space-between" mb={"64px"} align="center">
        <Heading as={"h2"} maxW="310px" fSize="48px">
          Popular <SpanStyled>Artists</SpanStyled> Of This Week
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
      <GridWrapperStyled
        gridTempCol="repeat(auto-fit, minmax(300px, 1fr) 80px 410px 410px)"
        gridTempRow="310px 310px"
        gap="30px"
      >
        <GridItemStyled>
          <GradientContainer>
            <FlexWrapper>
              <FlexWrapper align="center" justify="center" padding="0 12px 0 0">
                <Picture
                  radius="50%"
                  width="48px"
                  height="48px"
                  heightMob="48px"
                  widthMob="48px"
                  imgJPG={artist1}
                />
              </FlexWrapper>
              <FlexWrapper justify="center" direction="column">
                <SpanStyled fontSize="14px" color="#FFFFFD">
                  Owner
                </SpanStyled>
                <SpanStyled fontSize="16px" color="#FFFFFD" fontW="700">
                  Osvaldo Percy
                </SpanStyled>
              </FlexWrapper>
            </FlexWrapper>
          </GradientContainer>
          <Picture
            objectFit="cover"
            imgAvif={img2Avif}
            imgWebp={img2Webp}
            imgJPG={img2JPG}
          />
        </GridItemStyled>
        <GridItemStyled gridCol="2/4">
          <GradientContainer>
            <FlexWrapper>
              <FlexWrapper align="center" justify="center" padding="0 12px 0 0">
                <Picture
                  radius="50%"
                  width="48px"
                  height="48px"
                  heightMob="48px"
                  widthMob="48px"
                  imgJPG={artist2}
                />
              </FlexWrapper>
              <FlexWrapper justify="center" direction="column">
                <SpanStyled fontSize="14px" color="#FFFFFD">
                  Owner
                </SpanStyled>
                <SpanStyled fontSize="16px" color="#FFFFFD" fontW="700">
                  Osvaldo Percy
                </SpanStyled>
              </FlexWrapper>
            </FlexWrapper>
          </GradientContainer>
          <Picture
            objectFit="cover"
            objectPosition="50% 15%"
            imgAvif={img3Avif}
            imgWebp={img3Webp}
            imgJPG={img3JPG}
          />
        </GridItemStyled>
        <GridItemStyled gridRowEnd="span 2">
          <GradientContainer>
            <FlexWrapper>
              <FlexWrapper align="center" justify="center" padding="0 12px 0 0">
                <Picture
                  radius="50%"
                  width="48px"
                  height="48px"
                  heightMob="48px"
                  widthMob="48px"
                  imgJPG={artist5}
                />
              </FlexWrapper>
              <FlexWrapper justify="center" direction="column">
                <SpanStyled fontSize="14px" color="#FFFFFD">
                  Owner
                </SpanStyled>
                <SpanStyled fontSize="16px" color="#FFFFFD" fontW="700">
                  Osvaldo Percy
                </SpanStyled>
              </FlexWrapper>
            </FlexWrapper>
          </GradientContainer>
          <Picture
            objectFit="cover"
            imgAvif={img1Avif}
            imgWebp={img1Webp}
            imgJPG={img1JPG}
          />
        </GridItemStyled>
        <GridItemStyled gridCol="1/3">
          <GradientContainer>
            <FlexWrapper>
              <FlexWrapper align="center" justify="center" padding="0 12px 0 0">
                <Picture
                  radius="50%"
                  width="48px"
                  height="48px"
                  heightMob="48px"
                  widthMob="48px"
                  imgJPG={artist3}
                />
              </FlexWrapper>
              <FlexWrapper justify="center" direction="column">
                <SpanStyled fontSize="14px" color="#FFFFFD">
                  Owner
                </SpanStyled>
                <SpanStyled fontSize="16px" color="#FFFFFD" fontW="700">
                  Osvaldo Percy
                </SpanStyled>
              </FlexWrapper>
            </FlexWrapper>
          </GradientContainer>
          <Picture
            objectFit="cover"
            objectPosition="50% 30%"
            imgAvif={img4Avif}
            imgWebp={img4Webp}
            imgJPG={img4JPG}
          />
        </GridItemStyled>
        <GridItemStyled>
          <GradientContainer>
            <FlexWrapper>
              <FlexWrapper align="center" justify="center" padding="0 12px 0 0">
                <Picture
                  radius="50%"
                  width="48px"
                  height="48px"
                  heightMob="48px"
                  widthMob="48px"
                  imgJPG={artist4}
                />
              </FlexWrapper>
              <FlexWrapper justify="center" direction="column">
                <SpanStyled fontSize="14px" color="#FFFFFD">
                  Owner
                </SpanStyled>
                <SpanStyled fontSize="16px" color="#FFFFFD" fontW="700">
                  Osvaldo Percy
                </SpanStyled>
              </FlexWrapper>
            </FlexWrapper>
          </GradientContainer>
          <Picture
            objectFit="cover"
            objectPosition="50% 27%"
            imgAvif={img5Avif}
            imgWebp={img5Webp}
            imgJPG={img5JPG}
          />
        </GridItemStyled>
      </GridWrapperStyled>
    </Section>
  );
};

export default ArtistsSection;
