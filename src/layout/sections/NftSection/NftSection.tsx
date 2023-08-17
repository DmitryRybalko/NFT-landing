import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper.styled";
import Picture from "../../../components/Picture/Picture";
import { SectionStyled } from "../../../components/Section/Section.styled";
import { SpanStyled } from "../../../components/Span/Span.styled";

const NftSection = () => {
  return (
    <SectionStyled>
      <FlexWrapper justify="space-between" align="center">
        <FlexWrapper direction={"column"}>
          <h1>
            Create And Sell Your <SpanStyled>Best NFTs</SpanStyled>
          </h1>
          <p>
            Start exploring the world of digital art and NFTs today and take
            control of your digital assets with confidence!
          </p>
          <FlexWrapper>
            <a href="#">Create Now</a>
            <a href="#">Learn More</a>
          </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper>
          <Picture
            width={"410px"}
            height={"475px"}
            objectFit={"cover"}
            objectPosition={"top"}
            position={"relative"}
          />
        </FlexWrapper>
      </FlexWrapper>
    </SectionStyled>
  );
};

export default NftSection;
