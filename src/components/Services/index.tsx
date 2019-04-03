import * as React from 'react';
import theme from '../../styled/theme';
import FloatingCTA from '../FloatingCTA';
import Page from '../Page';
import TopBar from '../TopBar';
import AvailableCTA from './AvailableCTA';
import BulletCard from './BulletCard';
import {
  bodyText,
  principles,
  testimonials,
  whyStartupsHireMe
} from './content';
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
            <BulletCard title="Reasons startups hire me">
              {whyStartupsHireMe}
            </BulletCard>
            <BulletCard title="Professional principles">
              {principles}
            </BulletCard>
          </ServicesContentAside>
        </Page.Section>
      </SplatBGSection>
      <AvailableCTA
        title="Good news"
        text="I'm on the lookout for new projects over spring / summer 2019. If you're working on something I'd love to hear about it!"
        button="Contact me"
      />
      <FloatingCTA
        content={[
          {
            type: 'button',
            label: 'Contact me',
            props: { to: '#contact' }
          }
        ]}
      />
    </ServicesMain>
  );
};

export default Services;
