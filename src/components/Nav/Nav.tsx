import styled, { useTheme } from "styled-components";
import LinkNav from "../Link/LinkNav";

const Nav = () => {
  const theme = useTheme();
  return (
    <NavStyled theme={theme}>
      <ul>
        <li>
          <LinkNav hrefTo="www.google.com" text="Marketplace" />
        </li>
        <li>
          <LinkNav hrefTo="www.google.com" text="Artists" />
        </li>
        <li>
          <LinkNav hrefTo="www.google.com" text="Community" />
        </li>
        <li>
          <LinkNav hrefTo="www.google.com" text="Collections" />
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
      &:first-child {
        a {
          &::before {
            width: 100%;
          }
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptopSM}) {
    display: none;
  }
`;
