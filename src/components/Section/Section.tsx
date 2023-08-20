import { ReactNode } from "react";
import styled from "styled-components";

type SectionPropsType = {
  children: ReactNode;
};

const Section = ({ children }: SectionPropsType) => {
  return <SectionStyled>{children}</SectionStyled>;
};

export default Section;

const SectionStyled = styled.section`
  margin-bottom: 184px;
`;
