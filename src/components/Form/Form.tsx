import styled from "styled-components";

const Form = () => {
  return (
    <FormStyled>
      <InputStyled type="email" placeholder="Enter your e-mail" />
      <button type="submit">Subscribe</button>
    </FormStyled>
  );
};

export default Form;

const FormStyled = styled.form`
  display: flex;
  align-items: center;
  width: 516px;
  min-height: 60px;
  position: relative;
  button {
    cursor: pointer;
    display: flex;
    padding: 12px 40px;
    width: 160px;
    justify-content: center;
    align-items: center;
    height: 52px;
    border-radius: 8px;
    background-color: #d3f85a;
    outline: none;
    border: none;
    font-size: 16px;
    font-weight: 700;
    position: absolute;
    right: 4px;
  }
`;

const InputStyled = styled.input`
  display: flex;
  width: 100%;
  border-radius: 8px;
  outline: none;
  background-color: #131e3a;
  padding: 16px 24px;
  color: rgba(255, 255, 253, 0.72);
  border: none;
  height: 60px;
`;
