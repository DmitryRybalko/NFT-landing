import styled from "styled-components";
import Logo from "../../components/Logo/Logo";
import Nav from "../../components/Nav/Nav";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Nav />
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  display: flex;
`;
