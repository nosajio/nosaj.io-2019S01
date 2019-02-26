import styled from 'styled-components';
import { Theme } from '../../styled/theme';
import { StyledWithProps } from '../../types/styled';
import Page from '../Page';
import QuotesCarousel from '../QuotesCarousel';

export interface ServicesStyledProps {
  theme: Theme;
  marginTop?: number | string;
  alignSelf?: string;
}

export const ServicesMain = styled(Page)``;

// Opener - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const ServicesOpenerFrame = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: ${({ theme }: ServicesStyledProps) =>
    `${theme.ms.rem(5)} 0 ${theme.ms.rem(6)}`};
  background: no-repeat url('/bg/waves-skew.svg') bottom center / cover;
`;

export const ServicesOpenerHead = styled.h1`
  grid-column: 2 / 12;
  text-align: center;
  ${({ theme }: ServicesStyledProps) => `
    font: 
      ${theme.fonts.a.weight.heavy} 
      ${theme.ms.rem(4)} 
      ${theme.fonts.a.family};
  `}
`;

// Logos - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const ServicesLogosFrame = styled.div`
  width: 100%;
  max-width: ${({ theme }: ServicesStyledProps) => theme.layout.maxWidth}px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const ServicesLogoImg: StyledWithProps<ServicesStyledProps> = styled.img`
  display: block;
  ${({ marginTop }: ServicesStyledProps) =>
    marginTop ? `margin-top: ${marginTop};` : ''}
  ${({ alignSelf }: ServicesStyledProps) =>
    alignSelf ? `align-self: ${alignSelf};` : ''}
`;

// Testimonials - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const ServicesQuotesCarousel = styled(QuotesCarousel)`
  margin-top: ${({ theme }: ServicesStyledProps) => theme.ms.rem(4)};
`;
