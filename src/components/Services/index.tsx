import * as React from 'react';
import theme from '../../styled/theme';
import FloatingCTA from '../FloatingCTA';
import Page from '../Page';
import TopBar from '../TopBar';
import BulletCard from './BulletCard';
import { principles, testimonials, whyStartupsHireMe, bodyText } from './content';
import ServicesLogos from './Logos';
import ServicesOpener from './Opener';
import {
  ServicesBigText,
  ServicesBigTextCite,
  ServicesBodyText,
  ServicesContentAside,
  ServicesMain,
  ServicesQuotesCarousel,
  SplatBGSection
} from './styled';

interface ServicesProps {}

const Services: React.FunctionComponent<ServicesProps> = props => {
  return (
    <ServicesMain>
      <TopBar />
      <ServicesOpener text="I can help you build & ship your product" />
      <ServicesLogos />
      <ServicesQuotesCarousel
        quotes={testimonials}
        backgroundColor={theme.colors.blue.bright}
        textColor="white"
      />
      <SplatBGSection>
        <Page.Section>
          <ServicesBigText>
            Access to skills is now more critical to a startup's success than
            access to capital.
            <ServicesBigTextCite>
              2018 Developer Coefficient
            </ServicesBigTextCite>
          </ServicesBigText>
          <ServicesBodyText>
            {bodyText.map((p, i) => (
              <p key={`services-p-${i}`}>{p}</p>
            ))}
          </ServicesBodyText>
          <ServicesContentAside>
            <BulletCard title="Why startups usually hire me">
              {whyStartupsHireMe}
            </BulletCard>
            <BulletCard title="Professional principles">
              {principles}
            </BulletCard>
          </ServicesContentAside>
        </Page.Section>
      </SplatBGSection>
      <FloatingCTA
        content={[
          {
            type: 'button',
            label: 'Send Jason a message',
            props: { to: '#contact' }
          }
        ]}
      />
    </ServicesMain>
  );
};

export default Services;
