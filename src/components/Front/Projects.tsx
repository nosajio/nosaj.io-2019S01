import * as React from 'react';
import Project, { ProjectProps } from '../Project';

const projects: ProjectProps[] = [
  {
    colors: {
      background: '#16345C',
      foreground: '#42DAD3'
    },
    title:
      'The worlds first Intellectual Property analysis and trading platform.',
    clientName: 'Tradespace Inc',
    links: [
      {
        label: 'Read Tradespace Case Study',
        path: '/p/tradespace-inc'
      }
    ]
  },
  {
    colors: {
      background: '#1973E6',
      foreground: 'white'
    },
    title:
      'A-Level computer science made easy with Just A-Level — an online teaching service for college students.',
    clientName: 'Just A-Level',
    links: [
      {
        label: 'Read Just A-Level Case Study',
        path: '/p/just-a-level'
      }
    ]
  },
  {
    colors: {
      background: '#111',
      foreground: '#F6E75E'
    },
    title:
      'The easy way to find affordable live/work spaces in London.',
    clientName: 'live/work search',
    links: [
      {
        label: 'Read live/work search Case Study',
        path: '/p/just-a-level'
      }
    ]
  }
];

interface FrontProjectsProps {}

const FrontProjects: React.FunctionComponent<FrontProjectsProps> = props => {
  return (
    <section>
      {projects.map((p, i) => (
        <Project key={`project-${i}`} {...p} />
      ))}
    </section>
  );
};

export default FrontProjects;
