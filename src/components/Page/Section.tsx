import styled from 'styled-components';
import { Theme } from '../../styled/theme';
import { halfMarginPrcnt, fullMarginPrcnt } from '../../styled/grid';

export type SectionProps = {
  theme: Theme;
  topGap: number;
  bottomGap: number;
  withCols: number;
  maxWidth: number;
};

const Section = styled.section(
  ({
    theme,
    withCols = 12,
    topGap = 2,
    bottomGap = 2,
    maxWidth = 1440
  }: SectionProps) => `
  ${theme.innergrid(withCols)}
  position: relative;
  padding: 0 ${halfMarginPrcnt}%;
  max-width: ${maxWidth}px;
  margin: ${topGap > 0 ? theme.ms.rem(topGap) : '0'} auto ${
    bottomGap > 0 ? theme.ms.rem(bottomGap) : '0'
  } auto;
`
);

export default Section;
