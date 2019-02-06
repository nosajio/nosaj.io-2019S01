import * as React from 'react';
import Page from '../Page';
import {
  ProjectClientName,
  ProjectFrame,
  ProjectHeadline,
  ProjectImage,
  ProjectImages,
  ProjectLink,
  ProjectLinks
} from './styled';

export type ProjectLink = {
  label: string;
  path: string;
};

export type ProjectImage = {
  path: string;
};

export interface ProjectProps {
  className?: string;
  title: string;
  clientName?: string;
  links?: Array<ProjectLink>;
  images?: Array<ProjectImage>;
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
  colors
}) => {
  return (
    <ProjectFrame className={className} withColors={colors}>
      <Page.Section>
        {clientName && (
          <ProjectClientName withColors={colors}>
            {clientName}
          </ProjectClientName>
        )}
        <ProjectHeadline>{title}</ProjectHeadline>
        {links && (
          <ProjectLinks>
            {links.map(l => (
              <ProjectLink
                key={`project-link-${l.path}`}
                to={l.path}
                withColors={colors}
              >
                {l.label}
              </ProjectLink>
            ))}
          </ProjectLinks>
        )}
        {images && (
          <ProjectImages>
            {images.map(im => (
              <ProjectImage key={`project-img-${im.path}`} src={im.path} />
            ))}
          </ProjectImages>
        )}
      </Page.Section>
    </ProjectFrame>
  );
};

export default Project;
