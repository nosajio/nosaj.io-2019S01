import styled from 'styled-components';
import { Theme } from '../../styled/theme';
import { halfMarginPrcnt, fullMarginPrcnt } from '../../styled/grid';

export type SectionProps = {
  theme: Theme;
  withCols: number;
  maxWidth: number;
};

const Section = styled.section(
  ({ theme, withCols = 12, maxWidth = 1600 }: SectionProps) => `
  ${theme.innergrid(withCols)}
  padding: 0 ${halfMarginPrcnt}%;
  max-width: ${maxWidth}px;
  margin: 0 auto;
`
);

export default Section;
