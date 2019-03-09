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

export interface FrontProps {}

const Front: React.FunctionComponent<FrontProps> = () => {
  const smallScreen = useMedia({ max: mediaRules[1].min });
  return (
    <FrontMain>
      <FrontWaves />
      <TopBar />
      <Page.Section>
        <Opener headline="I help startups solve problems & forge great software" />
      </Page.Section>
      <Page.Section topGap={smallScreen ? 3 : 6}>
        <NosajIntro />
      </Page.Section>
      <Page.Section topGap={5}>
        <BigTestimonial column={['mid']} quotes={testimonials} />
      </Page.Section>
      <Page.Grid topGap={5}>
        <H type="h2" column={[smallScreen ? 'main' : 1, 'main 2']}>
          Selected Works
        </H>
      </Page.Grid>
      <a id="work-anchor" />
      <FrontProjects />
    </FrontMain>
  );
};

export default Front;
