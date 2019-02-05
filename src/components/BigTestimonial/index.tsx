import * as React from 'react';
import {
  BigTestimonialFrame,
  BigTestimonialQuote,
  BigTestimonialBy
} from './styled';
import withGrid from '../../hocs/withGrid';

export interface BigTestimonialProps {
  className?: string;
  quotes: Array<{
    quote: string;
    from?: React.ReactNode | string;
  }>;
}

const BigTestimonial: React.FunctionComponent<BigTestimonialProps> = ({
  quotes,
  className
}) => {
  return (
    <>
      {quotes.map((q, i) => (
        <BigTestimonialFrame key={`bigquote-${i}`} className={className}>
          <BigTestimonialQuote>{q.quote}</BigTestimonialQuote>
          {q.from && <BigTestimonialBy>{q.from}</BigTestimonialBy>}
        </BigTestimonialFrame>
      ))}
    </>
  );
};

export default withGrid(BigTestimonial);
