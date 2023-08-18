import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper.styled";
import { GridItemStyled } from "../../../components/GridItem/GridItem.styled";
import { GridWrapperStyled } from "../../../components/GridWrapper/GridWrapper.styled";
import Link from "../../../components/Link/Link";
import Picture from "../../../components/Picture/Picture";
import { SectionStyled } from "../../../components/Section/Section.styled";
import { SpanStyled } from "../../../components/Span/Span.styled";

const ArtistsSection = () => {
  return (
    <SectionStyled>
      <FlexWrapper justify="space-between" mb={"64px"} align="center">
        <h2>
          Popular <SpanStyled>Artists</SpanStyled> Of This Week
        </h2>
        <Link text={"See All"} />
      </FlexWrapper>
      <GridWrapperStyled
        gridTempCol="repeat(auto-fit, minmax(300px, 1fr) 80px 410px 410px)"
        gridTempRow="310px 310px"
        gap="30px"
      >
        <GridItemStyled>
          <Picture objectFit="cover" />
        </GridItemStyled>
        <GridItemStyled gridCol="2/4">
          <Picture objectFit="cover" objectPosition="50% 10%" />
        </GridItemStyled>
        <GridItemStyled gridRowEnd="span 2">
          <Picture />
        </GridItemStyled>
        <GridItemStyled gridCol="1/3">
          <Picture />
        </GridItemStyled>
        <GridItemStyled>
          <Picture />
        </GridItemStyled>
      </GridWrapperStyled>
    </SectionStyled>
  );
};

export default ArtistsSection;
