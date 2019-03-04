import * as React from 'react';
import Page from '../Page';
import TopBar from '../TopBar';
import { tradespaceAssetPath } from './common';
import {
  RolesDiagram,
  TSBlockquote,
  TSBlockquoteCite,
  TSChapterLabel,
  TSCSLabel,
  TSDesign,
  TSDev,
  TSHeadline,
  TSHero,
  TSHeroMeta,
  TSHeroMetaItem,
  TSImg,
  TSIntro,
  TSIntroHeadline,
  TSIntroImg,
  TSIntroText,
  TSP,
  TSPlan,
  TSProjectPage,
  TSSectionHeadline,
  TSTestimonial,
  TSText
} from './styled';
import TSThanks from './TSThanks';

interface TradespaceProjectProps {}

const TradespaceProject: React.FunctionComponent<
  TradespaceProjectProps
> = () => {
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
      <TSPlan>
        <TSChapterLabel>The Plan</TSChapterLabel>
        <TSSectionHeadline>
          Optimizing sprints for maximum iterations
        </TSSectionHeadline>
        <TSText>
          <TSP>
            At the start everything about the product was still mostly
            fictional. This is my favourites type of project—an empty vessel
            gives me the opportunity to really get to know the problem.
          </TSP>
          <TSP>
            We decided to batch work into short sprints with two stand ups per
            week. The team of four was spread out around the planet so this kept
            us all in sync, and made the iteration loop shorter.
          </TSP>
          <TSP>
            With shorter iterations we could change stuff fast and pivot on a
            dime when necessary
          </TSP>
          <RolesDiagram />
        </TSText>
      </TSPlan>
      <TSDesign>
        <TSChapterLabel>Design</TSChapterLabel>
        <TSSectionHeadline>
          Rough mockups are cheap to produce.
          <br />
          So I produced a lot.
        </TSSectionHeadline>
        <TSText>
          <TSP>
            Founder Alec and I settled into a design groove with a combination
            of InVision and powerpoint annotations for design feedback.
          </TSP>
        </TSText>
        <TSImg src={tradespaceAssetPath('wires-framed.png')} alt="" />
        <TSText>
          <TSP>
            During the early design stage, I roughly designed parts of the app
            with pen and paper and regularly asked Alec to feedback.
          </TSP>

          <TSP>
            Rough mockups are very cheap to produce and contain a lot of
            information, so I tried over a hundred ideas like this, and only
            made higher fidelity pixel versions for the best ideas.
          </TSP>
        </TSText>
      </TSDesign>
      <TSTestimonial>
        <TSBlockquote>
          <p>
            Jason led design and UI/UX development for a complex project in a
            niche market space (intellectual property markets). He was able to
            translate complicated data and analytics into an elegant, intuitive
            design.
          </p>
          <p>
            His iterative, collaborate approach to design and development
            ensured not only that he captured all requirements, but that he also
            captured elements that we needed but didn’t think to include.
          </p>
          <p>
            From soup to nuts, Jason delivered a remarkable product within
            budget on a tight timeline. As a startup, this was critical to
            ensuring we got to market quickly with a robust product that could
            evolve to meet customer needs.
          </p>
          <TSBlockquoteCite>
            — Alec Sorensen, CEO Tradespace inc
          </TSBlockquoteCite>
        </TSBlockquote>
      </TSTestimonial>
      <TSDev>
        <TSChapterLabel>Development</TSChapterLabel>
        <TSSectionHeadline>Demo-driven Development</TSSectionHeadline>
        <TSText>
          <TSP>
            Alec organized about two demos every week to sell the product to
            potential clients concurrent to the build. We'd aim to roll out
            features in time for these demos.
          </TSP>
          <TSP>
            When Alec demoed a new feature, we could get direct feedback, and at
            the same time get a better understanding of the needs of paying
            customers.
          </TSP>
          <TSP>
            In the end this turned out to be an effective strategy. With every
            demo it felt like the product get a little bit better, which in turn
            made it more valuable to potential users. It wasn’t long before
            customers wanted in.
          </TSP>
        </TSText>
        <TSImg src={tradespaceAssetPath('fb-org-profile-framed.png')} alt="" />
        <TSSectionHeadline>Technology & Stack</TSSectionHeadline>
        <TSText>
          <TSP>
            AWS was the natural choice for a quick infrastructure setup that has
            lots of tools and gives Tradespace enough flexibility to grow.
          </TSP>
          <TSP>
            Right at the beginning of the project I setup a continuous
            integration (CI) system to automate deploys whenever I pushed code.
            It’s important to front-load these small automations because they
            accumulate over time, saving hours—sometimes days—that can be put
            back into development.
          </TSP>
        </TSText>
      </TSDev>
      <TSThanks />
    </TSProjectPage>
  );
};

export default TradespaceProject;
