import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper.styled";
import Form from "../../../components/Form/Form";
import Picture from "../../../components/Picture/Picture";
import Section from "../../../components/Section/Section";
import { SpanStyled } from "../../../components/Span/Span.styled";
import { TextStyled } from "../../../components/Text/Text.styled";
import { Heading } from "../../../components/headings/Headings.styled";
import img1Avif from "../../../assets/img/nft12.avif";
import img1Webp from "../../../assets/img/nft12.webp";
import img1JPG from "../../../assets/img/nft12.jpg";
import PseudoElementContainer from "../../../components/PseudoElementContainer/PseudoElementContainer.styled";
import pseudoImg from "../../../assets/img/nft13.jpg";

const SubscribeSection = () => {
  return (
    <Section>
      <FlexWrapper justify="space-between" padding="0px 0px 0px 30px">
        <PseudoElementContainer
          top="75px"
          left="318px"
          img={pseudoImg}
          pseudoW="282px"
          pseudoH="348px"
        >
          <Picture
            imgAvif={img1Avif}
            imgWebp={img1Webp}
            imgJPG={img1JPG}
            width="410px"
            height="376px"
            position="relative"
            objectFit="cover"
            objectPosition="50% 30%"
            rotate="rotate(-11deg)"
          />
        </PseudoElementContainer>

        <FlexWrapper direction="column" justify="flex-start" width="520px">
          <Heading as={"h2"} maxW="520px" fSize="48px" margin="0 0 20px 0">
            Subscribe And <SpanStyled>get our Updates</SpanStyled> Every Week
          </Heading>
          <TextStyled margin="0px 0px 40px 0px">
            We have a blog related to NFT so we can share thoughts and routines
            on our blog which is updated weekly
          </TextStyled>
          <Form />
        </FlexWrapper>
      </FlexWrapper>
    </Section>
  );
};

export default SubscribeSection;
