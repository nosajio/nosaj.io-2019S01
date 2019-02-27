import styled from 'styled-components';
import { Theme } from '../../styled/theme';
import Page from '../Page';
import TSSection from './TSSection';
import { tradespaceAssetPath } from './common';

const tsTheme = {
  colors: {
    blueLight: '#4F698B',
    blue: '#16345c',
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
`;

// Hero - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const TSHero = styled.header`
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
      background: ${tsTheme.colors.blueLight};
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

// Plan - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Design + Dev - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
