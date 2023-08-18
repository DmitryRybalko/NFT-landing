import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper.styled";
import Form from "../../../components/Form/Form";
import Picture from "../../../components/Picture/Picture";
import { SectionStyled } from "../../../components/Section/Section.styled";
import { SpanStyled } from "../../../components/Span/Span.styled";

const SubscribeSection = () => {
  return (
    <SectionStyled>
      <FlexWrapper justify="space-between">
        <Picture width="410px" height="376px" position="relative" />
        <FlexWrapper direction="column" justify="flex-start">
          <h2>
            Subscribe And <SpanStyled>get our Updates</SpanStyled> Every Week
          </h2>
          <p>
            We have a blog related to NFT so we can share thoughts and routines
            on our blog which is updated weekly
          </p>
          <Form />
        </FlexWrapper>
      </FlexWrapper>
    </SectionStyled>
  );
};

export default SubscribeSection;
