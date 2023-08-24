import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bgCol: string;
      bgSecondaryCol: string;
      primaryCol: string;
      fontCol: string;
      fontColDark: string;
      gradient: string;
      whiteCol: string;
    };
    breakpoints: {
      mobileSM: string;
      mobileMD: string;
      mobileLG: string;
      tabletSM: string;
      tabletMD: string;
      tabletLG: string;
      laptopSM: string;
      laptopMD: string;
      laptopLG: string;
    };
  }
}
