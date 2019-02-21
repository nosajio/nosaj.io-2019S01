import { cdnURL } from '../../../utils/cdn';
import { ProjectProps, ProjectImage } from '../../Project';

// Textual data for the interrupt banner
interface IBProjectsData {
  _interrupt: boolean;
  title: string;
  body: string;
  images?: Array<ProjectImage>;
  cta?: {
    label: string;
    path?: string;
    url?: string;
  };
}

export type FrontProjectsData = ProjectProps | IBProjectsData;

const _interrupt = true;

const projects: Array<FrontProjectsData> = [
  {
    colors: {
      background: '#4A4B55',
      foreground: '#42DAD3',
      text: '#fff'
    },
    title:
      "The world's largest Intellectual Property analysis and trading platform.",
    clientName: 'Tradespace Inc',
    images: [
      {
        src: cdnURL('2009S01/work/tradespace/orgs-cover.png'),
        maxWidth: '1227px'
      }
    ],
    links: [
      {
        label: 'Read Tradespace Case Study',
        path: '/w/tradespace'
      }
    ]
  },
  {
    colors: {
      background: '#024BA7',
      foreground: 'white'
    },
    title:
      'A-Level computer science made easy with Just A-Level — a learning platform for college students.',
    clientName: 'Just A-Level',
    images: [
      {
        src: cdnURL('2009S01/work/justalevel/video-page-preview-devices.png'),
        maxWidth: '928px'
      }
    ],
    paddingBottom: false,
    links: [
      {
        label: 'Try Just A-level',
        url: 'https://justalevel.com'
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
      path: '#contact'
    }
  },
  {
    colors: {
      background: '#FFD0BC',
      foreground: '#9D7003',
      text: '#089586'
    },
    title: 'BeachFix: the planet’s best beaches at your fingertips.',
    clientName: 'Beachfix',
    paddingBottom: false,
    images: [
      {
        src: cdnURL('2009S01/work/beachfix/beachfix-mobile-double.png'),
        maxWidth: '987px'
      }
    ],
    links: [
      {
        label: 'Watch the BeachFix demo',
        url: cdnURL('2009S01/work/beachfix/beachfix-flow.mp4')
      }
    ]
  }
];

export default projects;
