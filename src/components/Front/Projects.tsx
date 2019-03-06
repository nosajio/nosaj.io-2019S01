import * as React from 'react';
import Heading from '../Heading';
import InterruptBanner from '../InterruptBanner';
import Project from '../Project';
import projects from './data/projects';

interface FrontProjectsProps {}

const FrontProjects: React.FunctionComponent<FrontProjectsProps> = props => {
  return (
    <section>
      {projects.map((p, i) =>
        '_interrupt' in p ? (
          <InterruptBanner key={`project-${i}`}>
            <Heading type="h3">{p.title}</Heading>
            <p>{p.body}</p>
          </InterruptBanner>
        ) : (
          <Project key={`project-${i}`} {...p} />
        )
      )}
    </section>
  );
};

export default FrontProjects;
