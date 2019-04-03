import theme, { Theme, styled } from '../../styled/theme';
import Page from '../Page';
import QuotesCarousel from '../QuotesCarousel';
import media from '../../styled/media';
import Button from '../Button';

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
  background: no-repeat url('/bg/waves-skew.svg') bottom / cover;

  ${media.medium`
    padding: ${({ theme }) => `${theme.ms.rem(5)} 0 ${theme.ms.rem(6)}`};
  `}
`;

export const ServicesOpenerHead = styled.h1`
  grid-column: main / main 2;
  text-align: center;
  ${({ theme }) => `
    font: 
      ${theme.fonts.a.weight.heavy} 
      ${theme.ms.rem(3)} 
      ${theme.fonts.a.family};
  `}

  ${media.medium` font-size: ${({ theme }) => theme.ms.rem(4)};`}
`;

// Logos - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const ServicesLogosFrame = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth}px;
  margin: 0 auto;
  display: flex;
  flex: 0 1 auto;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: row wrap;
  ${media.large`
    flex-flow: row nowrap;
    justify-content: space-around;
  `}
`;

export const ServicesLogoImg = styled.img<ServicesStyledProps>`
  display: block;
  margin: 0.5rem;
  max-width: 34%;
  opacity: 0.8;
  ${({ alignSelf }) => (alignSelf ? `align-self: ${alignSelf};` : '')}

  ${media.large<ServicesStyledProps>`
    margin: 0;
    max-width: 100%;
    opacity: 1;
    ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop};` : '')}
  `}
`;

// Testimonials - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const ServicesQuotesCarousel = styled(QuotesCarousel)`
  margin-top: ${({ theme }) => theme.ms.rem(4)};
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
  ${({ theme }) => `
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
    margin-bottom: ${({ theme }) => theme.ms.rem(1)};
    background: ${({ theme }) => theme.colors.blue.bright};
  }
`;

export const ServicesBigTextCite = styled.div`
  grid-row: 1;
  text-transform: uppercase;
  ${({ theme }) => `
    color: ${theme.colors.blue.bright};
    font: 
      ${theme.fonts.b.weight.heavy} 
      1rem
      ${theme.fonts.b.family};
  `}

  ${ServicesBigText} > & {
    margin-top: ${({ theme }) => theme.ms.rem(1)};
  }
`;

export const ServicesBodyText = styled.article`
  margin-top: ${({ theme }) => theme.ms.rem(3)};
  grid-row: 3;
  grid-column: main / main 2;

  p {
    color: ${({ theme }) => theme.colors.blackish};
    ${({ theme }) => `
      font-size: ${theme.ms.rem(1)};
    `}
    margin: 0;
  }

  p + p {
    margin-top: ${({ theme }) => theme.ms.rem(2)};
  }

  ${media.medium`
    grid-row: 2;
    grid-column: main / 7;
  `}
`;

export const ServicesContentAside = styled.aside`
  grid-row: 2;
  grid-column: main / main 2;
  padding-top: ${({ theme }) => theme.ms.rem(2)};
  ${media.medium`
    grid-column: 8 / main 2;
  `}
`;

// Availability Banner - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const ServicesCTAFrame = styled.section`
  ${({ theme }) => theme.mobilegrid()}
  margin: ${({ theme }) => theme.ms.rem(4)} 0;
  text-align: center;
  ${media.medium`${({ theme }) => theme.innergrid(12)}`}
`;

export const ServicesCTAHead = styled.h1`
  grid-column: mid;
  font-family: ${({ theme }) => theme.fonts.b.family};
  font-size: ${({ theme }) => theme.ms.rem(3)};
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.ms.rem(1)};
`;

export const ServicesCTAText = styled.div`
  grid-column: mid;
  font-size: ${({ theme }) => theme.ms.rem(1)};

  p {
    margin: 0;
    margin-bottom: ${({ theme }) => theme.ms.rem(1)};
  }
`;

export const ServicesCTABtn = styled(Button)`
  padding-left: ${({ theme }) => theme.ms.rem(2)};
  padding-right: ${({ theme }) => theme.ms.rem(2)};
`;
