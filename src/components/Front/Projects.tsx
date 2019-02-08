import * as React from 'react';
import Project from '../Project';
import projects, { FrontProjectsData } from './data/projects';
import InterruptBanner from '../InterruptBanner';
import Heading from '../Heading';

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
