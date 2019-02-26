import * as React from 'react';
import {
  QCAuthor,
  QCBackground,
  QCFrame,
  QCQuote,
  QCQuoteFrame,
  QCQuoteShape
} from './styled';

export type QuoteItem = {
  author: {
    name: string;
    role: string | React.ReactNode;
  };
  quotation: string | React.ReactNode;
};

export interface QuotesCarouselProps {
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  quotes: QuoteItem[];
}

const QuotesCarousel: React.FunctionComponent<QuotesCarouselProps> = ({
  className,
  backgroundColor,
  textColor,
  quotes
}) => {
  return (
    <QCBackground withBG={backgroundColor} className={className}>
      <QCFrame withFG={textColor}>
        {quotes.map((q, i) => (
          <QCQuoteFrame>
            <QCQuoteShape />
            <QCAuthor>
              <div>{q.author.name}</div>
              <div>{q.author.role}</div>
            </QCAuthor>
            <QCQuote>{q.quotation}</QCQuote>
          </QCQuoteFrame>
        ))}
      </QCFrame>
    </QCBackground>
  );
};

export default QuotesCarousel;
