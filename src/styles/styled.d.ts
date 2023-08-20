// styled.d.ts
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
  }
}
