import styled from 'styled-components';

export const FormWrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  font-weight: 500;
`;

export const Input = styled.input`
  margin-top: 0.5rem;
  padding: 0.25rem;
`;

export const ErrorText = styled.p`
  margin-bottom: 16px;
  color: red;
  font-size: 14px;
`;
