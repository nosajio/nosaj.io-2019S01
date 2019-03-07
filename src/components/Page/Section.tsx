import styled, { css } from 'styled-components';
import { halfMarginPrcnt } from '../../styled/grid';
import media from '../../styled/media';
import { Theme } from '../../styled/theme';

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
  position: relative;
  padding: 0 ${halfMarginPrcnt}%;
  width: 100%;
  max-width: ${theme.layout.maxWidth}px;
  margin: ${topGap > 0 ? theme.ms.rem(topGap) : '0'} auto
    ${bottomGap > 0 ? theme.ms.rem(bottomGap) : '0'} auto;
`;

const Section = styled.section((props: SectionProps) => {
  return css`
    ${gridBodyStyles(props)}
    // On small screens, use a simple one col grid
    ${({ theme }) => theme.mobilegrid()};    

    // On large screens, use the default grid
    ${media.large`
      ${({ theme }) => theme.innergrid(props.withCols)}
    `}
  `;
});

// Grid is the same as section in every way except that a <div /> will be used
// instead of a <section />
export const Grid = styled.div((props: SectionProps) => gridBodyStyles(props));

export default Section;
