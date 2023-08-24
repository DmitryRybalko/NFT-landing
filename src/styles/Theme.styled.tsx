import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    bgCol: "#090f1d",
    bgSecondaryCol: "#131E3A",
    primaryCol: "#D3F85A",
    fontCol: "#FFFFFD",
    fontColDark: "#838382",
    whiteCol: "#ffffff",
    gradient:
      "linear-gradient(2deg, rgba(19, 30, 58, 0.92) 0%, rgba(19, 30, 58, 0.00) 94.62%), lightgray -22.387px -35px / 110.921% 105.368% no-repeat;",
  },
  breakpoints: {
    mobileSM: "320px",
    mobileMD: "375px",
    mobileLG: "420px",
    tabletSM: "640px",
    tabletMD: "768px",
    tabletLG: "1024px",
    laptopSM: "1280px",
    laptopMD: "1440px",
    laptopLG: "1680px",
  },
};
