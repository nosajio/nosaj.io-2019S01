import * as React from 'react';
import CSCover, { CSCoverProps } from './components/CSCover';
import CSImg, { CSImgProps } from './components/CSImg';
import CSText, { CSTextProps } from './components/CSText';
import { cdnURL } from './utils/cdn';

export interface CaseStudyElementDescription {
  Component: React.ComponentType<any>;
  props: object;
}

export interface ProjectMeta {
  slug: string;
  pageTitle: string;
  lightTopBar?: boolean;
  page: CaseStudyElementDescription[];
}

const tradespaceProject: ProjectMeta = {
  slug: 'tradespace',
  lightTopBar: true,
  pageTitle: 'Building the biggest IP analysis and trading platform',
  page: [
    {
      Component: CSCover,
      props: <CSCoverProps>{
        title: "Building the World's Largest IP Analysis & Trading Platform",
        bgColor: '#16345C',
        fgColor: '#42DAD3',
        textColor: '#fff',
        meta: [
          {
            label: 'Client',
            content: 'Tradespace inc'
          },
          {
            label: 'Deliverables',
            content: 'SAAS product & initial brand elements'
          },
          {
            label: 'Duration',
            content: '16 weeks'
          }
        ]
      }
    },
    {
      Component: CSText,
      props: <CSTextProps>{
        text: [
          'I was first introduced to Tradespace inc and Alec Sorensen – Founder and CEO – in July of 2018 while he was gearing up to work on something rather ambitious: he was planning to build the worlds largest commercial database and analysis platform for intellectual property.'
        ]
      }
    },
    {
      Component: CSImg,
      props: <CSImgProps>{
        src: cdnURL('2009S01/work/tradespace/organization-s.png')
      }
    },
    {
      Component: CSText,
      props: <CSTextProps>{
        text: [
          'I was brought on board to handle the design and development of the public facing Tradespace product and all the systems that go with it.',
          'As the project went on I moved on to backend work, user management, and interfacing with the enourmous postgres database and ingestion system that Chinedu had done an expert job setting up.'
        ]
      }
    }
  ]
};

const p: ProjectMeta[] = [tradespaceProject];

export default p;
