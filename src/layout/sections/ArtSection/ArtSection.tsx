import CardWrapper from "../../../components/CardWrapper/CardWrapper";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper.styled";
import Link from "../../../components/Link/Link";
import Picture from "../../../components/Picture/Picture";
import SVGicon from "../../../components/SVGicon/SVGicon";
import { SectionStyled } from "../../../components/Section/Section.styled";
import { SpanStyled } from "../../../components/Span/Span.styled";

const ArtSection = () => {
  return (
    <SectionStyled>
      <FlexWrapper justify="space-between" mb={"64px"} align="center">
        <h2>
          <SpanStyled>Amazing</SpanStyled> and Super Unique Art of This{" "}
          <SpanStyled>Week</SpanStyled>
        </h2>
        <Link text={"See All"} />
      </FlexWrapper>
      <FlexWrapper wrap={"wrap"} gap={"30px"}>
        <CardWrapper>
          <Picture
            objectPosition={"top"}
            objectFit={"cover"}
            width="370px"
            height="340px"
            mb="24px"
          />
          <FlexWrapper mb={"16px"} justify="space-between" align="center">
            <h3>Cyberpunk Cocomo</h3>
            <div>
              <SVGicon
                width="24px"
                height="24px"
                viewBox="0 0 24 25"
                symbolId={"eth"}
              />
              <span>490ETH</span>
            </div>
          </FlexWrapper>
          <FlexWrapper justify="space-between">
            <FlexWrapper direction="column">
              <span>Ending in</span>
              <FlexWrapper align="start" justify="left">
                <SVGicon
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 25"
                  symbolId={"clock"}
                />
                <span>03:24:56</span>
              </FlexWrapper>
            </FlexWrapper>
            <Link text="Place A Bid" />
          </FlexWrapper>
        </CardWrapper>
        <CardWrapper>
          <Picture
            objectPosition={"50% 15%"}
            objectFit={"cover"}
            width="370px"
            height="340px"
            mb="24px"
          />
          <FlexWrapper mb={"16px"} justify="space-between" align="center">
            <h3>Charge, Qi tiao yu</h3>
            <div>
              <SVGicon
                width="24px"
                height="24px"
                viewBox="0 0 24 25"
                symbolId={"eth"}
              />
              <span>490ETH</span>
            </div>
          </FlexWrapper>
          <FlexWrapper justify="space-between">
            <FlexWrapper direction="column">
              <span>Ending in</span>
              <FlexWrapper>
                <SVGicon
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 25"
                  symbolId={"clock"}
                />
                <span>03:24:56</span>
              </FlexWrapper>
            </FlexWrapper>
            <Link text="Place A Bid" />
          </FlexWrapper>
        </CardWrapper>
        <CardWrapper>
          <Picture
            objectPosition={"top"}
            objectFit={"cover"}
            width="370px"
            height="340px"
            mb="24px"
          />
          <FlexWrapper mb={"16px"} justify="space-between" align="center">
            <h3>Surgeon, Josh Rife</h3>
            <div>
              <SVGicon
                width="24px"
                height="24px"
                viewBox="0 0 24 25"
                symbolId={"eth"}
              />
              <span>490ETH</span>
            </div>
          </FlexWrapper>
          <FlexWrapper justify="space-between">
            <FlexWrapper direction="column">
              <span>Ending in</span>
              <FlexWrapper>
                <SVGicon
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 25"
                  symbolId={"clock"}
                />
                <span>03:24:56</span>
              </FlexWrapper>
            </FlexWrapper>
            <Link text="Place A Bid" />
          </FlexWrapper>
        </CardWrapper>
      </FlexWrapper>
    </SectionStyled>
  );
};

export default ArtSection;
