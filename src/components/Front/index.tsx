import * as React from 'react';
import BigTestimonial, { BigTestimonialProps } from '../BigTestimonial';
import Opener from '../Opener';
import Page from '../Page';
import { FrontMain, NosajIntro, WavesFixed } from './styled';
import { default as H } from '../Heading';

export interface FrontProps {}

const testimonials: BigTestimonialProps['quotes'] = [
  {
    quote:
      '[Jason is] a one man startup machine - with a record of designing and building a huge range of websites from scratch...',
    from: (
      <>
        Elliot O’Connor – Investor, <a href="">Firstminute Capital</a> &
        Co-founder, <a href="">Code at Uni</a>
      </>
    )
  }
];

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
        <Page.Section topGap={4}>
          <H type="h2" column={[1, 5]}>
            Selected Works
          </H>
        </Page.Section>
      </FrontMain>
    );
  }
}

export default Front;
