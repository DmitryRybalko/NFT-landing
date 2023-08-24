import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Canela Medium";
  font-display: swap;
  src: url("/fonts/canela-medium.woff2") format("woff2"),
       url("/fonts/canela-medium.woff") format("woff");
}
@font-face {
  font-family: "Inter Regular";
  font-display: swap;
  src: url("/fonts/inter-regular.woff2") format("woff2"),
  url("/fonts/inter-regular.woff") format("woff");
}
@font-face {
  font-family: "Inter Bold";
  font-display: swap;
  src: url("/fonts/inter-bold.woff2") format("woff2"),
  url("/fonts/inter-bold.woff") format("woff"),
}


*,
*::before,
*::after{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

body {
  background-color: #090f1d;
  color: #fffffd;
  font-family: "Inter Regular", sans-serif;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
}

svg {
  fill: white;
}
`;
