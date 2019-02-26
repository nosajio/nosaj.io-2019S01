import * as React from 'react';
import { ServicesMain } from './styled';
import TopBar from '../TopBar';
import ServicesOpener from './Opener';
import ServicesLogos from './Logos';
import Page from '../Page';

interface ServicesProps {}

const Services: React.FunctionComponent<ServicesProps> = props => {
  return (
    <ServicesMain>
      <TopBar />
      <ServicesOpener text="I can help you build & ship your product" />
      <Page.Section>
        <ServicesLogos />
      </Page.Section>
    </ServicesMain>
  );
};

export default Services;
