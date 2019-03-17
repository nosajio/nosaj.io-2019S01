import * as React from 'react';
import Button from '../Button';
import { ButtonSizes } from '../Button/styled';
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
            {p.cta && (
              <Button
                to={p.cta.path}
                size={ButtonSizes.large}
                fgColor="black"
                bgColor="white"
              >
                {p.cta.label}
              </Button>
            )}
          </InterruptBanner>
        ) : (
          <Project key={`project-${i}`} {...p} />
        )
      )}
    </section>
  );
};

export default FrontProjects;
