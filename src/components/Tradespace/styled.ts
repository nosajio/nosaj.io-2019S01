import media from '../../styled/media';
import { styled } from '../../styled/theme';
import Page from '../Page';
import { tradespaceAssetPath } from './common';
import TSSection from './TSSection';

const tsTheme = {
  colors: {
    blueWhite: '#E9FFFE',
    blueLightGrey: '#789bb5',
    blue: '#16345c',
    blueDarkGrey: '#363E4A',
    teal: '#42DAD3'
  }
};

export const TSProjectPage = styled(Page)``;

// General components - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const TSP = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.blackish};
  margin: 0;

  & + & {
    margin-top: ${({ theme }) => theme.ms.rem(1)};
  }

  ${media.large`
    font-size: ${({ theme }) => theme.ms.rem(1)};

  `}
`;

export const TSChapterLabel = styled.div`
  color: ${tsTheme.colors.teal}
  text-align: center;
  grid-column: main / main 2;
  margin-bottom: ${({ theme }) => theme.ms.rem(-1)};
  ${({ theme }) => `
      font: 
        ${theme.fonts.a.weight.light} 
        1rem
        ${theme.fonts.a.family};
    `}
  }

  ${media.medium`
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.ms.rem(1)};
  `}
`;

export const TSSectionHeadline = styled.h1`
  grid-column: main / main 2;
  color: ${tsTheme.colors.blue};
  line-height: 1.25;
  text-align: center;
  ${({ theme }) => `
    font-size: ${theme.ms.rem(1)};
    font-weight: ${theme.fonts.a.weight.light}; 
    margin-bottom: 1em;
  `}

  ${media.medium`
    font-size: ${({ theme }) => theme.ms.rem(2)};
  `}

  ${media.large`
    font-size: ${({ theme }) => theme.ms.rem(3)};
  `}
`;

export const TSText = styled.div`
  grid-column: mid;
`;

export const TSImg = styled.img`
  display: block;
  grid-column: main / main 2;
  width: 100%;
  height: auto;
  margin: ${({ theme }) => theme.ms.rem(3)} 0;
`;

// Hero - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const TSHero = styled.div`
  padding: ${({ theme }) => `${theme.ms.rem(5)} 0 ${theme.ms.rem(4)}`};
  text-align: center;
  background: no-repeat url('${tradespaceAssetPath(
    'graph-bg.svg'
  )}') center / cover;

  ${media.large`
    padding: ${({ theme }) => `${theme.ms.rem(4)} 0 ${theme.ms.rem(4)}`};
  `}
`;

export const TSHeadline = styled.h1`
  grid-column: main / main 2;
  color: ${tsTheme.colors.blue};
  line-height: 1.25;

  ${({ theme }) => `
    font-weight: ${theme.fonts.a.weight.bold}; 
    font-size: ${theme.ms.rem(1)};
  `}

  ${media.medium`
    font-size: ${({ theme }) => theme.ms.rem(3)};
  `}

  ${media.large`
    font-size: ${({ theme }) => theme.ms.rem(4)};
  `}
`;

export const TSCSLabel = styled.div`
  grid-column: main / main 2;
  text-align: center;

  /* Inner div to override the parent grid */
  div {
    display: inline-block;
    color: white;
    text-transform: uppercase;
    padding: 3px 0.75rem;
    margin-bottom: 0.5em;
    background: ${tsTheme.colors.blueLightGrey};
    font: ${({ theme }) =>
      `${theme.fonts.c.weight.condensed} 14px ${theme.fonts.c.family}`};
  }

  ${media.large`
    div {
      padding: 4px 1rem;
      font-size: 16px;
    }
  `}
`;

export const TSHeroMeta = styled.div`
  grid-column: main / main 2;
  margin-top: ${({ theme }) => theme.ms.rem(3)};
`;

export const TSHeroMetaItem = styled.div`
  text-transform: uppercase;
  font-size: 15px;

  ${media.large`
    font-size: 1rem;
  `}

  em {
    display: block;
    font-style: normal;
    color: ${tsTheme.colors.teal};
    ${media.large`
      display: inline;
    `}
  }

  & + & {
    margin-top: 15px;
  }
`;

// Intro - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const TSIntro = styled(TSSection)``;
export const TSIntroText = styled.div`
  grid-column: main / main 2;

  ${media.large`
    grid-column: main / 7;
  `}
`;
export const TSIntroHeadline = styled.h2`
  color: ${tsTheme.colors.blue};
  ${({ theme }) => `
    margin-bottom: ${theme.ms.rem(2)};
    font: 
      ${theme.fonts.a.weight.light} 
      ${theme.ms.rem(1)} 
      ${theme.fonts.a.family};
  `}

  > span {
    color: ${tsTheme.colors.teal};
  }

  ${media.medium`
    font-size: ${({ theme }) => theme.ms.rem(3)};
  `}
`;
export const TSIntroImg = styled.img`
  display: block;
  width: 100%;
  max-width: 800px;
  position: absolute;
  left: 60vw;
  top: 0;
`;

// Plan  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const TSPlan = styled(TSSection)`
  background-image: linear-gradient(-180deg, #f0f0f0 0%, #ffffff 100%);
`;

export const RolesDiagram = styled.div`
  width: 100%;
  max-width: 610px;
  background: no-repeat url('${tradespaceAssetPath(
    'role-chart.png'
  )}') center / auto 100%;
  margin: ${({ theme }) => theme.ms.rem(4)} auto 0;

  &::after {
    content:'';
    display: block;
    padding-top: 76.393%;
  }
`;

// Design + Dev  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const TSDesign = styled(TSSection)`
  background: ${tsTheme.colors.blueWhite};
`;

// Quote - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const TSTestimonial = styled(TSSection)`
  background: ${tsTheme.colors.blueDarkGrey};
  color: white;
`;

export const TSBlockquote = styled.blockquote`
  grid-column: main / main 2;
  padding: 1rem;
  margin: 0;
  border: 3px white solid;
  ${({ theme }) => `
    font: 
      ${theme.fonts.a.weight.bold} 
      ${theme.ms.rem(1)} 
      ${theme.fonts.a.family};
  `}

  p {
    margin: 0;
  }
  p + p {
    margin-top: ${({ theme }) => theme.ms.rem(1)};
  }

  ${media.large`
    border-width: 5px;
    grid-column: 3 / 11;
    font-size: ${({ theme }) => theme.ms.rem(2)};
    padding: ${({ theme }) => theme.ms.rem(3)};
  `}
`;

export const TSBlockquoteCite = styled.cite`
  display: block;
  ${({ theme }) => `
    margin-top: ${theme.ms.rem(2)};
    font: 
      ${theme.fonts.a.weight.bold} 
      ${theme.ms.rem(1)} 
      ${theme.fonts.a.family};
  `}
`;

// Development - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const TSDev = styled(TSSection)``;
