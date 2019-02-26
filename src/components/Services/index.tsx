import * as React from 'react';
import theme from '../../styled/theme';
import Page from '../Page';
import { QuoteItem } from '../QuotesCarousel';
import TopBar from '../TopBar';
import ServicesLogos from './Logos';
import ServicesOpener from './Opener';
import { ServicesMain, ServicesQuotesCarousel } from './styled';

interface ServicesProps {}

const testimonials: QuoteItem[] = [
  {
    author: {
      name: 'Alec Sorensen',
      role: 'CEO, Tradespace inc'
    },
    quotation:
      'Jason delivered a remarkable product within budget on a tight timeline. As a startup, this was critical to ensuring we got to market quickly with a robust product.'
  }
];

const Services: React.FunctionComponent<ServicesProps> = props => {
  return (
    <ServicesMain>
      <TopBar />
      <ServicesOpener text="I can help you build & ship your product" />
      <Page.Section>
        <ServicesLogos />
      </Page.Section>
      <ServicesQuotesCarousel
        quotes={testimonials}
        backgroundColor={theme.colors.blue.bright}
        textColor="white"
      />
      <Page.Section></Page.Section>
    </ServicesMain>
  );
};

export default Services;
