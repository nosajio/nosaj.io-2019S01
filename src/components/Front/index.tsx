import * as React from 'react';
import BigTestimonial from '../BigTestimonial';
import { default as H } from '../Heading';
import Opener from '../Opener';
import Page from '../Page';
import TopBar from '../TopBar';
import testimonials from './data/testimonials';
import FrontProjects from './Projects';
import { FrontMain, NosajIntro, FrontWaves } from './styled';
import useMedia from '../../hooks/useMedia';
import { mediaRules } from '../../styled/media';
import Process from './Process';

export interface FrontProps {
  headline?: string;
  servicesLink?: string;
  hireMeLink?: string;
  workLink?: string;
}

const Front: React.FunctionComponent<FrontProps> = ({
  headline,
  servicesLink,
  hireMeLink,
  workLink
}) => {
  const smallScreen = useMedia({ max: mediaRules[1].min });
  return (
    <FrontMain>
      <FrontWaves />
      <TopBar />
      <Page.Section>
        <Opener
          headline={
            headline ||
            'I partner with startups & corporations to create effective web software.'
          }
          servicesLink={servicesLink || 'What I do'}
          hireMeLink={hireMeLink || "Hire me"}
          workLink={workLink || 'Work'}
        />
      </Page.Section>
      <Page.Section
        topGap={smallScreen ? 3 : 6}
        bottomGap={smallScreen ? 2 : 5}
      >
        <NosajIntro />
      </Page.Section>
      <Process />
      <Page.Section topGap={5}>
        <BigTestimonial column={['mid']} quotes={testimonials} />
      </Page.Section>
      <Page.Grid topGap={5}>
        <a id="work-anchor" />
      </Page.Grid>
      <FrontProjects />
    </FrontMain>
  );
};

export default Front;
