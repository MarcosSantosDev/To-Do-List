import styled from '@emotion/styled';

export const Pagination = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 4px;
  justify-content: center;
  align-items: center;
  width: 150px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid rgba(19, 38, 47, 0.8);
  border-radius: 20px;
  color: rgba(19, 38, 47, 0.8);
  background-color: white;
  transition: opacity 0.5s;

  svg {
    font-size: 14px;
    color: rgba(19, 38, 47, 0.8);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  &:hover:not([disabled]) {
    box-shadow: 0px 0px 50px 0px rgba(19, 38, 47, 0.2);
  }
`;
