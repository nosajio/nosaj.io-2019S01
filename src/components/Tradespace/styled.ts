import styled from 'styled-components';
import { Theme } from '../../styled/theme';
import Page from '../Page';
import TSSection from './TSSection';
import { tradespaceAssetPath } from './common';

const tsTheme = {
  colors: {
    blueWhite: '#E9FFFE',
    blueLightGrey: '#789bb5',
    blue: '#16345c',
    blueDarkGrey: '#363E4A',
    teal: '#42DAD3'
  }
};

interface TSProjectStyledProps {
  theme: Theme;
}

export const TSProjectPage = styled(Page)``;

// General components - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const TSP = styled.p`
  font-size: ${({ theme }: TSProjectStyledProps) => theme.ms.rem(1)};
  line-height: 1.4;
  color: ${({ theme }: TSProjectStyledProps) => theme.colors.blackish};
  margin: 0;

  & + & {
    margin-top: ${({ theme }: TSProjectStyledProps) => theme.ms.rem(1)};
  }
`;

export const TSChapterLabel = styled.div`
  color: ${tsTheme.colors.teal}
  text-align: center;
  grid-column: main;
  margin-bottom: 1rem;
  ${({ theme }: TSProjectStyledProps) => `
      font: 
        ${theme.fonts.a.weight.light} 
        ${theme.ms.rem(1)}
        ${theme.fonts.a.family};
    `}
  }
`;

export const TSSectionHeadline = styled.h1`
  grid-column: main;
  color: ${tsTheme.colors.blue};
  line-height: 1.25;
  text-align: center;
  ${({ theme }: TSProjectStyledProps) => `
    font-weight: ${theme.fonts.a.weight.light}; 
    font-size: ${theme.ms.rem(3)};
    margin-bottom: 1em;
  `}
`;

export const TSText = styled.div`
  grid-column: 4 / 10;
`;

export const TSImg = styled.img`
  display: block;
  grid-column: main;
  width: 100%;
  height: auto;
  margin: ${({ theme }: TSProjectStyledProps) => theme.ms.rem(3)} 0;
`;

// Hero - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const TSHero = styled.div`
  padding: ${({ theme }: { theme: Theme }) => theme.ms.rem(4)} 0;
  text-align: center;
  background: no-repeat url('${tradespaceAssetPath(
    'graph-bg.svg'
  )}') center / cover;
`;
export const TSHeadline = styled.h1`
  grid-column: main;
  color: ${tsTheme.colors.blue};
  line-height: 1.25;
  ${({ theme }: TSProjectStyledProps) => `
    font-weight: ${theme.fonts.a.weight.bold}; 
    font-size: ${theme.ms.rem(4)};
  `}
`;
export const TSCSLabel = styled.div`
  grid-column: main;
  text-align: center;

  /* Inner div to override the parent grid */
  div {
    display: inline-block;
    color: white;
    text-transform: uppercase;
    padding: 4px 1rem;
    ${({ theme }: TSProjectStyledProps) => `
      background: ${tsTheme.colors.blueLightGrey};
      font: 
        ${theme.fonts.c.weight.condensed} 
        16px
        ${theme.fonts.c.family};
    `}
  }
`;
export const TSHeroMeta = styled.div`
  grid-column: main;
  margin-top: ${({ theme }: TSProjectStyledProps) => theme.ms.rem(3)};
`;
export const TSHeroMetaItem = styled.div`
  text-transform: uppercase;

  em {
    font-style: normal;
    color: ${tsTheme.colors.teal};
  }

  & + & {
    margin-top: 15px;
  }
`;

// Intro - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const TSIntro = styled(TSSection)``;
export const TSIntroText = styled.div`
  grid-column: main / 7;
`;
export const TSIntroHeadline = styled.h2`
  color: ${tsTheme.colors.blue};
  ${({ theme }: TSProjectStyledProps) => `
    margin-bottom: ${theme.ms.rem(2)};
    font: 
      ${theme.fonts.a.weight.light} 
      ${theme.ms.rem(3)} 
      ${theme.fonts.a.family};
  `}

  > span {
    color: ${tsTheme.colors.teal};
  }
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
  margin: ${({ theme }: TSProjectStyledProps) => theme.ms.rem(4)} auto 0;

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
  grid-column: 3 / 11;
  padding: ${({ theme }: TSProjectStyledProps) => theme.ms.rem(3)};
  margin: 0;
  border: 5px white solid;
  ${({ theme }: TSProjectStyledProps) => `
    font: 
      ${theme.fonts.a.weight.bold} 
      ${theme.ms.rem(2)} 
      ${theme.fonts.a.family};
  `}

  p {
    margin: 0;
  }
  p + p {
    margin-top: ${({ theme }: TSProjectStyledProps) => theme.ms.rem(1)};
  }
`;

export const TSBlockquoteCite = styled.cite`
  display: block;
  ${({ theme }: TSProjectStyledProps) => `
    margin-top: ${theme.ms.rem(2)};
    font: 
      ${theme.fonts.a.weight.bold} 
      ${theme.ms.rem(1)} 
      ${theme.fonts.a.family};
  `}
`;

// Development - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const TSDev = styled(TSSection)``;
