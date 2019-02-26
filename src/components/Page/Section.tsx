import styled from 'styled-components';
import { Theme } from '../../styled/theme';
import { halfMarginPrcnt, fullMarginPrcnt } from '../../styled/grid';

export type SectionProps = {
  theme: Theme;
  topGap: number;
  bottomGap: number;
  withCols: number;
};

const gridBodyStyles = ({
  theme,
  withCols = 12,
  topGap = 2,
  bottomGap = 2
}: SectionProps): string => `
${theme.innergrid(withCols)}
position: relative;
padding: 0 ${halfMarginPrcnt}%;
max-width: ${theme.layout.maxWidth}px;
margin: ${topGap > 0 ? theme.ms.rem(topGap) : '0'} auto ${
  bottomGap > 0 ? theme.ms.rem(bottomGap) : '0'
} auto;
`;

const Section = styled.section((props: SectionProps) => gridBodyStyles(props));

// Grid is the same as section in every way except that a <div /> will be used
// instead of a <section />
export const Grid = styled.div((props: SectionProps) => gridBodyStyles(props));

export default Section;
