import * as React from 'react';
import { BigTestimonialProps } from '../../BigTestimonial';

const testimonials: BigTestimonialProps['quotes'] = [
  {
    quote:
      'Jason is a one man startup machine, with a record of designing and building a huge range of websites from scratch...',
    from: (
      <>
        Elliot O’Connor – Investor,{' '}
        <a href="https://firstminute.capital" target="_blank">
          Firstminute Capital
        </a>{' '}
        & Co-founder,{' '}
        <a href="https://www.codeatuni.com" target="_blank">
          Code at Uni
        </a>
      </>
    )
  }
];

export default testimonials;
