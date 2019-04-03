import * as React from 'react';
import { Link } from 'react-router-dom';
import { ProjectImage as ProjectImageType, ProjectProps } from '.';
import borderUnderline from '../../styled/border-underline';
import { styled } from '../../styled/theme';
import media from '../../styled/media';

const getColor = (
  c: ProjectProps['colors'],
  t: 'background' | 'foreground' | 'text',
  d: string = ''
): string => (c && c[t] ? String(c[t]) : d);

export type ProjectStyledProps = {
  withColors?: ProjectProps['colors'];
  withMaxWidth?: ProjectImageType['maxWidth'];
  withPaddingBottom?: ProjectProps['paddingBottom'];
  withJustification?: ProjectImageType['justify'];
};

export const ProjectFrame = styled.article<ProjectStyledProps>`
  ${({ theme: { ms }, withColors, withPaddingBottom }) => `
    padding: ${ms.rem(3)} 0 ${withPaddingBottom ? ms.rem(3) : '0'};
    background: ${getColor(withColors, 'background', 'transparent')};
    color: ${getColor(withColors, 'text', 'white')};
  `}

  & + & {
    margin-top: ${({ theme }) => theme.ms.rem(1)};
  }
`;

export const ProjectClientName = styled.div<ProjectStyledProps>`
  ${({ theme: { fonts, ms }, withColors }) => `
    color: ${getColor(withColors, 'foreground', 'transparent')};
    font-weight: ${fonts.a.weight.light};
    margin-bottom: ${ms.rem(-1)};
    `}
  grid-column: main / main 2;
  text-transform: uppercase;
  letter-spacing: 5px;
`;

export const ProjectHeadline = styled.div<ProjectStyledProps>`
  grid-column: main / main 2;
  ${({ theme: { ms, fonts } }) => `
  font: ${fonts.a.weight.bold} ${ms.rem(2)} ${fonts.a.family};
  `}

  ${media.medium`
    padding-right: 8vw;
  `}
`;

export const ProjectLinks = styled.div<ProjectStyledProps>`
  grid-column: main / main 2;
  display: flex;
  flex-flow: row nowrap;
  margin-top: ${({ theme }) => theme.ms.rem(1)};
`;

export const ProjectLink = styled(
  // Remap the props on Link so the typechecker doesn't complain about
  // unrecognized props.
  ({ withColors, ...rest }) =>
    React.createElement(rest.href ? 'a' : Link, { ...rest })
)<ProjectStyledProps>`
  ${({ theme: { ms }, withColors }) => `
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

  &:hover {
    color: ${({ withColors }) => getColor(withColors, 'text', 'white')};
  }
`;

export const ProjectImages = styled.div<ProjectStyledProps>`
  grid-column: main / main 2;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: ${({ theme }) => theme.ms.rem(3)};
`;

export const ProjectImage = styled.img<ProjectStyledProps>`
  display: block;
  width: 100%;
  height: 100%;
  max-width: ${({ withMaxWidth }) => (withMaxWidth ? withMaxWidth : '100%')};
  justify-self: ${({ withJustification }) =>
    withJustification ? withJustification : 'center'};
`;

export const ProjectRoles = styled.div`
  grid-column: main / main 2;
  margin-top: ${({ theme }) => theme.ms.rem(1)};
  font-size: 1rem;
`;
export const ProjectRolesLabel = styled.span`
  font-weight: ${({ theme }) => theme.fonts.a.weight.bold};
`;
export const ProjectRolesRoles = styled.span`
  display: inline-block;
  margin-left: ${({ theme }) => theme.ms.rem(-2)};
`;
