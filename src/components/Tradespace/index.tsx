import * as React from 'react';
import { cdnURL } from '../../utils/cdn';
import TopBar from '../TopBar';
import {
  TSCSLabel,
  TSHeadline,
  TSHero,
  TSHeroMeta,
  TSHeroMetaItem,
  TSIntro,
  TSIntroHeadline,
  TSIntroImg,
  TSIntroText,
  TSP,
  TSProjectPage
} from './styled';
import { tradespaceAssetPath } from './common';
import Page from '../Page';

interface TradespaceProjectProps {}

const TradespaceProject: React.FunctionComponent<
  TradespaceProjectProps
> = props => {
  return (
    <TSProjectPage>
      <TopBar />
      <TSHero>
        <Page.Grid>
          <TSCSLabel>
            <div>Case Study #001</div>
          </TSCSLabel>
          <TSHeadline>
            Building the world's largest Intellectual Property analysis and
            trading platform.
          </TSHeadline>
          <TSHeroMeta>
            <TSHeroMetaItem>
              <em>Deliverables:</em> Tenant-based IP analysis platform.
            </TSHeroMetaItem>
            <TSHeroMetaItem>
              <em>Client:</em> Tradespace inc.
            </TSHeroMetaItem>
          </TSHeroMeta>
        </Page.Grid>
      </TSHero>
      <TSIntro
        appendedElements={[
          <TSIntroImg src={tradespaceAssetPath('tesla-signin.png')} alt="" />
        ]}
      >
        <TSIntroText>
          <TSIntroHeadline>
            <span>Tradespace inc</span> help companies make better technology
            decisions
          </TSIntroHeadline>
          <TSP>
            For years before we met, CEO of Tradespace Alec Sorensen consulted
            with organizations and governments to help them make good decisions
            on their intellectual property (IP).
          </TSP>
          <TSP>
            Alec noticed there was a gap in the market for a SAAS product that
            used his own experience and trade secrets to automate the process of
            exploring and analyzing the world’s patents.
          </TSP>
          <TSP>That's where this project begins.</TSP>
        </TSIntroText>
      </TSIntro>
    </TSProjectPage>
  );
};

export default TradespaceProject;
