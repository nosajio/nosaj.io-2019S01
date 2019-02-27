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
  background: no-repeat url('/bg/waves-skew.svg') bottom / cover;
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

// Main part - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const SplatBGSection = styled.div`
  display: flex;
  background: no-repeat url('/bg/waves-splat.svg') right -1.5rem;
  margin: 0;
  position: relative;
`;

export const ServicesBigText = styled.h1`
  grid-row: 1;
  grid-column: main / 8;
  ${({ theme }: ServicesStyledProps) => `
    font: 
    ${theme.fonts.a.weight.heavy} 
    ${theme.ms.rem(3)} 
    ${theme.fonts.a.family};
    line-height: ${theme.ms.rem(3)};
    color: ${theme.colors.blackish};
    margin-top: ${theme.ms.rem(2)};
    `}

  &::before {
    content: '';
    display: block;
    max-width: 147px;
    height: 12px;
    margin-bottom: ${({ theme }: ServicesStyledProps) => theme.ms.rem(1)};
    background: ${({ theme }: ServicesStyledProps) => theme.colors.blue.bright};
  }
`;

export const ServicesBigTextCite = styled.div`
  text-transform: uppercase;
  ${({ theme }: ServicesStyledProps) => `
    color: ${theme.colors.blue.bright};
    font: 
      ${theme.fonts.c.weight.condensed} 
      1rem
      ${theme.fonts.c.family};
  `}

  ${ServicesBigText} > & {
    margin-top: ${({ theme }: ServicesStyledProps) => theme.ms.rem(1)};
  }
`;

export const ServicesBodyText = styled.article`
  grid-column: main / 7;
  margin-top: ${({ theme }: ServicesStyledProps) => theme.ms.rem(3)};

  p {
    color: ${({ theme }: ServicesStyledProps) => theme.colors.blackish};
    ${({ theme }: ServicesStyledProps) => `
      font-size: ${theme.ms.rem(1)};
    `}
    margin: 0;
  }

  p + p {
    margin-top: ${({ theme }: ServicesStyledProps) => theme.ms.rem(2)};
  }
`;

export const ServicesContentAside = styled.aside`
  grid-row: 2;
  grid-column: 8 / main;
  padding-top: ${({ theme }: ServicesStyledProps) => theme.ms.rem(2)};
`;
