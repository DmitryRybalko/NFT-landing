import styled from "styled-components";

const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <a href="#">Marketplace</a>
        </li>
        <li>
          <a href="#">Artists</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
        <li>
          <a href="#">Collections</a>
        </li>
      </ul>
      <a href="#">Contact</a>
    </NavStyled>
  );
};

export default Nav;

const NavStyled = styled.nav`
  ul {
    display: flex;
  }
`;
