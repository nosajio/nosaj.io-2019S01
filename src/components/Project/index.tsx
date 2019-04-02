import * as React from 'react';
import Page from '../Page';
import {
  ProjectClientName,
  ProjectFrame,
  ProjectHeadline,
  ProjectImage,
  ProjectImages,
  ProjectLink,
  ProjectLinks,
  ProjectRoles,
  ProjectRolesLabel,
  ProjectRolesRoles
} from './styled';

export type ProjectLink = {
  label: string;
  path?: string;
  url?: string;
};

export type ProjectImage = {
  src: string;
  maxWidth?: string;
  justify?: 'flex-start' | 'flex-end' | 'center';
};

export interface ProjectProps {
  className?: string;
  title: string;
  clientName?: string;
  links?: Array<ProjectLink>;
  images?: Array<ProjectImage>;
  roles?: Array<string>;
  paddingBottom?: boolean;
  colors?: {
    background: string;
    text?: string;
    foreground: string;
  };
}

const Project: React.FunctionComponent<ProjectProps> = ({
  className,
  title,
  clientName,
  links,
  images,
  colors,
  roles = [],
  paddingBottom = true
}) => {
  return (
    <ProjectFrame
      className={className}
      withColors={colors}
      withPaddingBottom={paddingBottom}
    >
      <Page.Section bottomGap={0}>
        {clientName && (
          <ProjectClientName withColors={colors}>
            {clientName}
          </ProjectClientName>
        )}
        <ProjectHeadline>{title}</ProjectHeadline>
        {roles.length > 0 && (
          <ProjectRoles>
            <ProjectRolesLabel>Roles</ProjectRolesLabel>
            <ProjectRolesRoles>{roles.join(', ')}</ProjectRolesRoles>
          </ProjectRoles>
        )}
        {links && (
          <ProjectLinks>
            {links.map(l =>
              l.path ? (
                <ProjectLink
                  key={`project-link-${l.path}`}
                  to={l.path}
                  withColors={colors}
                >
                  {l.label}
                </ProjectLink>
              ) : l.url ? (
                <ProjectLink
                  key={`project-link-${l.label}`}
                  href={l.url}
                  target="_blank"
                  withColors={colors}
                >
                  {l.label}
                </ProjectLink>
              ) : null
            )}
          </ProjectLinks>
        )}
        {images && (
          <ProjectImages>
            {images.map(im => (
              <ProjectImage
                key={`project-img-${im.src}`}
                src={im.src}
                withMaxWidth={im.maxWidth || undefined}
                withJustification={im.justify}
              />
            ))}
          </ProjectImages>
        )}
      </Page.Section>
    </ProjectFrame>
  );
};

export default Project;
