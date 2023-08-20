import styled from "styled-components";
import Link from "./Link";

type FooterLinksItemPropsType = {
  hrefTo?: string;
  text?: string;
  margin?: string;
  lineH?: string;
};

const FooterLinksItem = ({
  hrefTo,
  text,
  margin,
  lineH,
}: FooterLinksItemPropsType) => {
  return (
    <FooterLinksItemStyled>
      <Link margin={margin} lineH={lineH} text={text} hrefTo={hrefTo} />
    </FooterLinksItemStyled>
  );
};

export default FooterLinksItem;

const FooterLinksItemStyled = styled.li<FooterLinksItemPropsType>`
  display: flex;
  flex-direction: column;
`;
