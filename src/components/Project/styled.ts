import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';
import { StyledWithProps } from '../../types/styled';
import { Theme } from '../../styled/theme';
import { ProjectProps } from '.';
import borderUnderline from '../../styled/border-underline';

const gridMax = 'grid-column: 2 / 12;';
const getColor = (
  c: ProjectProps['colors'],
  t: 'background' | 'foreground' | 'text',
  d: string = ''
): string => (c && c[t] ? String(c[t]) : d);

export type ProjectStyledProps = HTMLElement & {
  theme: Theme;
  withColors?: ProjectProps['colors'];
};

export const ProjectFrame: StyledWithProps<ProjectStyledProps> = styled.article`
  ${({ theme: { ms }, withColors }: ProjectStyledProps) => `
    padding: ${ms.rem(3)} 0;
    background: ${getColor(withColors, 'background', 'transparent')};
    color: ${getColor(withColors, 'text', 'white')};
  `}
`;

export const ProjectClientName: StyledWithProps<
  ProjectStyledProps
> = styled.div`
  ${({ theme: { fonts, ms }, withColors }: ProjectStyledProps) => `
    color: ${getColor(withColors, 'foreground', 'transparent')};
    font-weight: ${fonts.a.weight.light};
    margin-bottom: ${ms.rem(-1)};
    `}
  ${gridMax}
  text-transform: uppercase;
  letter-spacing: 5px;
`;

export const ProjectHeadline: StyledWithProps<ProjectStyledProps> = styled.div`
  grid-column: 2 / 10;
  ${({ theme: { ms, fonts }, withColors }: ProjectStyledProps) => `
    font: ${fonts.c.weight.bold} ${ms.rem(2)} ${fonts.c.family};
`}
`;

export const ProjectLinks: StyledWithProps<ProjectStyledProps> = styled.div`
  ${gridMax}
  display: flex;
  flex-flow: row nowrap;
  margin-top: ${({ theme }: ProjectStyledProps) => theme.ms.rem(1)};
`;

export const ProjectLink: StyledWithProps<ProjectStyledProps> = styled(Link)`
  ${({ theme: { ms }, withColors }: ProjectStyledProps) => `
      color: ${getColor(
        withColors,
        'foreground',
        getColor(withColors, 'text', 'white')
      )};
      /* Decorate with border as underline */
      text-decoration: none;
      ${borderUnderline(
        getColor(
          withColors,
          'foreground',
          getColor(withColors, 'text', 'white')
        )
      )}
      `}
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const ProjectImages = styled.div`
  ${gridMax}
`;

export const ProjectImage = styled.img``;
