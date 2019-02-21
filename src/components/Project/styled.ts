import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProjectImage as ProjectImageType, ProjectProps } from '.';
import borderUnderline from '../../styled/border-underline';
import { StyledWithProps, ThemeProps } from '../../types/styled';

const gridMax = 'grid-column: 2 / 12;';
const getColor = (
  c: ProjectProps['colors'],
  t: 'background' | 'foreground' | 'text',
  d: string = ''
): string => (c && c[t] ? String(c[t]) : d);

export type ProjectStyledProps = ThemeProps & {
  // theme: Theme;
  withColors?: ProjectProps['colors'];
  withMaxWidth?: ProjectImageType['maxWidth'];
  withPaddingBottom?: ProjectProps['paddingBottom'];
  withJustification?: ProjectImageType['justify'];
};

export const ProjectFrame: StyledWithProps<ProjectStyledProps> = styled.article`
  ${({ theme: { ms }, withColors, withPaddingBottom }: ProjectStyledProps) => `
    padding: ${ms.rem(3)} 0 ${withPaddingBottom ? ms.rem(3) : '0'};
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
  grid-column: main;
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

export const ProjectLink: StyledWithProps<ProjectStyledProps> = styled(
  // Remap the props on Link so the typechecker doesn't complain about
  // unrecognized props.
  ({ withColors, ...rest }) =>
    React.createElement(rest.href ? 'a' : Link, { ...rest })
)`
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
  cursor: pointer;
`;

export const ProjectImages: StyledWithProps<ProjectStyledProps> = styled.div`
  ${gridMax}
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: ${({ theme }: ProjectStyledProps) => theme.ms.rem(3)};
`;

export const ProjectImage: StyledWithProps<ProjectStyledProps> = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  max-width: ${({ withMaxWidth }: ProjectStyledProps) =>
    withMaxWidth ? withMaxWidth : '100%'};
  justify-self: ${({ withJustification }: ProjectStyledProps) =>
    withJustification ? withJustification : 'center'};
`;
