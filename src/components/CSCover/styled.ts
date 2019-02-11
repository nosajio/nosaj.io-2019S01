import styled from 'styled-components';
import { halfMarginPrcnt } from '../../styled/grid';
import { Theme } from '../../styled/theme';
import { StyledWithProps } from '../../types/styled';

export interface CSCoverStyledProps {
  theme: Theme;
  fgColor?: string;
  bgColor?: string;
  textColor?: string;
  withBorder?: boolean;
}

export const CSCoverFrame: StyledWithProps<CSCoverStyledProps> = styled.header(
  ({ theme, textColor, bgColor, withBorder }: CSCoverStyledProps) => `
  ${theme.innergrid(12)}
  grid-column: 1 / 13;
  color: ${textColor || 'white'};
  background: ${bgColor || 'black'};
  padding: ${theme.ms.rem(6)} 0 ${theme.ms.rem(3)};
  border-radius: 20px;
  ${withBorder ? `border: ${halfMarginPrcnt}vw solid white` : ''};
`
);

export const CSCoverH1: StyledWithProps<CSCoverStyledProps> = styled.h1(
  ({ theme, textColor }: CSCoverStyledProps) => `
  grid-column: 2 / 10;
  color: ${textColor || 'white'};
  font: ${theme.fonts.c.weight.heavyCondensed} 
    ${theme.ms.rem(4)} 
    ${theme.fonts.c.family};
`
);

export const CSCoverMetaFrame = styled.div`
  grid-column: 2 / 9;
`;

export const CSCoverMeta = styled.div`
  margin-top: ${({ theme }: CSCoverStyledProps) => theme.ms.rem(3)};
  text-transform: uppercase;
  grid-row: 2;
  grid-column-end: span 2;
  letter-spacing: 0.1em;

  &:nth-of-type(1) {
    grid-column-start: 2;
  }
`;

export const CSCoverMetaLabel = styled.div`
  width: 100%;
  font-size: ${({ theme }: CSCoverStyledProps) => theme.ms.rem(-1)};
  color: ${({ fgColor }: CSCoverStyledProps) => fgColor || 'white'};
  margin-bottom: ${({ theme }: CSCoverStyledProps) => theme.ms.rem(-2)};
`;
export const CSCoverMetaContent = styled.div`
  width: 100%;
`;
