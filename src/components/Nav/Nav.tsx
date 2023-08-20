import styled from "styled-components";
import Link from "../Link/Link";

const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <Link hrefTo="www.google.com" lineH="160%" text="Marketplace" />
        </li>
        <li>
          <Link hrefTo="www.google.com" lineH="160%" text="Artists" />
        </li>
        <li>
          <Link hrefTo="www.google.com" lineH="160%" text="Community" />
        </li>
        <li>
          <Link hrefTo="www.google.com" lineH="160%" text="Collections" />
        </li>
      </ul>
    </NavStyled>
  );
};

export default Nav;

const NavStyled = styled.nav`
  display: flex;
  ul {
    display: flex;
    li {
      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
`;
