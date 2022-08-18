import styled from '@emotion/styled';
import { css } from '@emotion/react';

type ButtonStyledProps = {
  fullWidth: boolean;
};

export const Button = styled.button<ButtonStyledProps>`
  ${({ fullWidth }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${fullWidth ? '100%' : 'max-content'};
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    padding: 4px 6px;
    color: #adbac7;
    background-color: #373e47;
    border: 1px solid #cdd9e51a;
    border-radius: 4px;
    cursor: pointer;

    svg {
      margin: 0 4px;
      font-size: 16px;
      color: inherit;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
    }

    &:hover:not([disabled]) {
      opacity: 0.8;
      box-shadow: 0px 0px 50px 0px rgba(19, 38, 47, 0.2);
    }
  `}
`;
