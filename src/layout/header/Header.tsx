import styled, { useTheme } from "styled-components";
import Logo from "../../components/Logo/Logo";
import Nav from "../../components/Nav/Nav";
import Link from "../../components/Link/Link";

const Header = () => {
  const theme = useTheme();
  return (
    <HeaderStyled>
      <Logo />
      <Nav />
      <Link
        color={theme.colors.bgCol}
        bgColor={theme.colors.primaryCol}
        padding="12px 40px"
        text="Contact"
        fontW="700"
        hrefTo="www.google.com"
      />
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 0;
  margin-bottom: 92px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tabletSM}) {
    margin-bottom: 60px;
    padding: 40px 0px 0px 0px;
  }
`;
