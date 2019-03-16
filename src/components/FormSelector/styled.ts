import styled from 'styled-components';
import { Theme } from '../../styled/theme';
import { StyledWithProps } from '../../types/styled';

export interface SelectorStyledProps {
  theme: Theme;
  isSelected?: boolean;
}

export const SelectorFrame = styled.div``;
export const SelectorLabel = styled.label``;
export const SelectorOptions = styled.div`
  display: grid;
  grid-column-gap: ${({ theme }: SelectorStyledProps) => theme.ms.rem(2)};
  grid-auto-columns: max-content;
`;
export const SelectorSelectable: StyledWithProps<
  SelectorStyledProps
> = styled.div`
  ${({ theme, isSelected }: SelectorStyledProps) =>
    `
    cursor: pointer;
    grid-row: 1;
    outline: none;
    color: black;
    border: 2px solid transparent;
    font-size: ${theme.ms.rem(1)};
    padding: ${theme.ms.rem(-1)} 1rem;
    border-radius: 12px;
    transition: all 200ms ease;

    &:focus { border-color: #726388 }
    
    ${
      isSelected
        ? `
      color: ${theme.colors.blackish};
      background: ${theme.colors.purple.neutral};
      border-color: transparent;
      
      &:focus { border-color: ${theme.colors.purple.bright} }
  `
        : ''
    }`}
`;
