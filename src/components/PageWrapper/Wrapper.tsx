import styled from "styled-components";

const PageWrapper = ({ children }: any) => {
  return <PageWrapperStyled>{children}</PageWrapperStyled>;
};

export default PageWrapper;

const PageWrapperStyled = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1322px;
`;
