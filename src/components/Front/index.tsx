import * as React from 'react';
import BigTestimonial from '../BigTestimonial';
import { default as H } from '../Heading';
import Opener from '../Opener';
import Page from '../Page';
import TopBar from '../TopBar';
import testimonials from './data/testimonials';
import FrontProjects from './Projects';
import { FrontMain, NosajIntro, WavesFixed } from './styled';

export interface FrontProps {}

class Front extends React.Component<FrontProps, any> {
  public render() {
    return (
      <FrontMain>
        <TopBar />
        <WavesFixed />
        <Page.Section>
          <Opener headline="I help startups solve problems & forge great software" />
        </Page.Section>
        <Page.Section topGap={6}>
          <NosajIntro />
        </Page.Section>
        <Page.Section topGap={4}>
          <BigTestimonial column={[4, 10]} quotes={testimonials} />
        </Page.Section>
        <Page.Grid topGap={4}>
          <H type="h2" column={[1, 5]}>
            Selected Works
          </H>
        </Page.Grid>
        <a id="work-anchor" />
        <FrontProjects />
      </FrontMain>
    );
  }
}

export default Front;
