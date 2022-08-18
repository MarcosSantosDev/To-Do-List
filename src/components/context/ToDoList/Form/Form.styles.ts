import styled from '@emotion/styled';

export const FormContainerDiv = styled.div`
  grid-area: formContainer;

  display: grid;
  grid-template-rows: 60px 40px;
  row-gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const FormTitleH3 = styled.h3`
  font-size: 32px;
  color: #ededed;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 5px;
  height: max-content;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  color: #000;
  border: 1px solid #cdd9e51a;
  border-radius: 4px;
`;
