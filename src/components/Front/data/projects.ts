import { ProjectProps } from '../../Project';

// Textual data for the interrupt banner
interface IBProjectsData {
  _interrupt: boolean;
  title: string;
  body: string;
  cta?: {
    label: string;
    path: string;
  };
}

export type FrontProjectsData = ProjectProps | IBProjectsData;

const _interrupt = true;

const projects: Array<FrontProjectsData> = [
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
    _interrupt,
    title: 'Let’s make something happen',
    body:
      "Think I can help you in 2019? Contact me today to gurantee I'll be available.",
    cta: {
      label: "Let's talk",
      path: '/contact'
    }
  },
  {
    colors: {
      background: '#111',
      foreground: '#F6E75E'
    },
    title: 'The easy way to find affordable live/work spaces in London.',
    clientName: 'live/work search',
    links: [
      {
        label: 'Read live/work search Case Study',
        path: '/p/just-a-level'
      }
    ]
  }
];

export default projects;
