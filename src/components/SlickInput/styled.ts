import * as React from 'react';
import { styled } from '../../styled/theme';
import FormLabel from '../Forms/Label';

export interface SlickFieldStyledProps {
  withElement?: 'input' | 'textarea';
  isBig?: boolean;
  isHighlighted?: boolean;
}

export const SlickInputFrame = styled.label`
  display: block;
  position: relative;
  /* Compensate for the floating label */
  padding-top: 1rem;
`;

export const SlickInputLabel = styled(FormLabel)<SlickFieldStyledProps>`
  position: absolute;
  left: 0;
  pointer-events: none;
  transition: all 150ms ease;

  ${({ isBig, isHighlighted, theme }) =>
    isBig
      ? `
      bottom: 10px;
      font-size: ${theme.ms.rem(1)};`
      : `
      font-size: 16px;
      bottom: calc(100% - 2rem);
      color: ${isHighlighted ? theme.colors.purple.bright : 'black'};
      `}
`;

export const SlickField = styled(({ withElement, ...rest }) =>
  React.createElement(withElement, { ...rest })
)`
  color: black;
  background: transparent;
  border: none;
  font-size: ${({ theme }) => theme.ms.rem(2)};
  font-weight: ${({ theme }) => theme.fonts.a.weight.bold};
  padding: ${({ theme }) => theme.ms.rem(-1)} 0;
  width: 100%;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.purple.bright};
  }
`;

export const SlickFieldUnderline = styled.div<SlickFieldStyledProps>`
  width: 100%;
  height: 6px;
  background: ${({ isHighlighted, theme }) =>
    isHighlighted ? theme.colors.purple.bright : '#dbdbdb'};
`;
