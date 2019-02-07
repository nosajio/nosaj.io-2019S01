import * as React from 'react';
import BigTestimonial, { BigTestimonialProps } from '../BigTestimonial';
import { default as H } from '../Heading';
import Opener from '../Opener';
import Page from '../Page';
import FrontProjects from './Projects';
import { FrontMain, NosajIntro, WavesFixed } from './styled';
import Thanks from './Thanks';
import testimonials from './testimonials';

export interface FrontProps {}

class Front extends React.Component<FrontProps, any> {
  public render() {
    return (
      <FrontMain>
        <WavesFixed />
        <Page.Section>
          <Opener headline="I help startups solve problems and forge great software" />
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
        <FrontProjects />
        <Page.Section topGap={4}>
          <Thanks column={[2, 12]} />
        </Page.Section>
      </FrontMain>
    );
  }
}

export default Front;
