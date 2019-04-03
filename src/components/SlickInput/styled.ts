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
  left: ${({ theme }) => theme.ms.rem(-1)};
  pointer-events: none;
  transition: all 150ms ease;

  ${({ isBig, isHighlighted, theme }) =>
    isBig
      ? `
      bottom: 5px;
      font-size: ${theme.ms.rem(1)};`
      : `
      font-size: 1rem;
      bottom: calc(100% - 2rem);
      color: ${isHighlighted ? theme.colors.purple.bright : 'black'};
      background: white;
      padding: 0 ${theme.ms.rem(-1)};
      `}
`;

export const SlickField = styled(({ withElement, ...rest }) =>
  React.createElement(withElement, { ...rest })
)`
  color: black;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.blackish};
  border-radius: 3px;
  font-size: ${({ theme }) => theme.ms.rem(1)};
  font-weight: ${({ theme }) => theme.fonts.a.weight.bold};
  padding: ${({ theme }) => `1rem ${theme.ms.rem(-1)}`};
  width: 100%;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.purple.bright};
  }
`;

export const SlickFieldUnderline = styled.div<SlickFieldStyledProps>`
  width: 100%;
  height: 4px;
  background: ${({ isHighlighted, theme }) =>
    isHighlighted ? theme.colors.purple.bright : theme.colors.blackish};
`;
