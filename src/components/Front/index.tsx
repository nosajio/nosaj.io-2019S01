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
            headline || 'I help startups solve problems & forge great software'
          }
          servicesLink={servicesLink || 'How I help startups'}
          hireMeLink={hireMeLink || 'Hire me for your next project'}
          workLink={workLink || 'Explore my work'}
        />
      </Page.Section>
      <Page.Section topGap={smallScreen ? 3 : 6}>
        <NosajIntro />
      </Page.Section>
      <Page.Section topGap={5}>
        <BigTestimonial column={['mid']} quotes={testimonials} />
      </Page.Section>
      <Page.Grid topGap={5}>
        <a id="work-anchor" />
        <H type="h2" column={[smallScreen ? 'main' : 1, 'main 2']}>
          Selected Works
        </H>
      </Page.Grid>
      <FrontProjects />
    </FrontMain>
  );
};

export default Front;
