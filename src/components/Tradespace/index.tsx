import * as React from 'react';
import useMedia from '../../hooks/useMedia';
import { mediaRules } from '../../styled/media';
import Media from '../Media';
import Page from '../Page';
import TopBar from '../TopBar';
import { tradespaceAssetPath } from './common';
import {
  RolesDiagram,
  TSBlockquote,
  TSBlockquoteCite,
  TSChapterLabel,
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
  const isSmallScreen = useMedia({ max: mediaRules[0].min });
  return (
    <TSProjectPage>
      <TopBar underLogoText="Case Study #01" />
      <TSHero>
        <Page.Grid>
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
        appendedElements={
          !isSmallScreen
            ? [
                <TSIntroImg
                  src={tradespaceAssetPath('tesla-signin.png')}
                  alt=""
                />
              ]
            : undefined
        }
      >
        <Media max={mediaRules[0].min}>
          <TSImg src={tradespaceAssetPath('tesla-signin.png')} alt="" />
        </Media>
        <TSIntroText>
          <TSIntroHeadline>
            <span>Tradespace inc</span> help companies make better technology
            decisions
          </TSIntroHeadline>
          <TSP>
            For years before we met, founder and CEO of Tradespace Alec Sorensen
            consulted with organizations and governments to help them unlock the
            value of their intellectual property (IP) portfolios.
          </TSP>
          <TSP>
            Alec noticed a gap in the market for a product to provide
            institutions with the tools, data, and the means to gain insights
            into their IP, and their competitors IP.
          </TSP>
          <TSP>
            Alec hired me in summer 2018 to help build an ambitious SAAS product
            that would end up being the largest patent analysis platform in the
            world. Read on to find out how we did it.
          </TSP>
        </TSIntroText>
      </TSIntro>
      <TSPlan>
        <TSChapterLabel>The Plan</TSChapterLabel>
        <TSSectionHeadline>
          Optimizing sprints for more iterations
        </TSSectionHeadline>
        <TSText>
          <TSP>
            When Alec hired me to help him build Tradespace, most details about
            the product were still fictional. This is my favourite type of
            project; a blank slate presents an opportunity to gain a deep
            understanding of the problem.
          </TSP>
          <TSP>
            Between the globally distributed team of four, we decided to batch
            work into short sprints with two stand-ups per week. The team was
            spread over Mexico, Ghana, England, and San Fransisco. Standups kept
            us all in sync and made the iteration loop shorter.
          </TSP>
          <TSP>
            With short iterations we knew we'd have to move fast to ship
            features, but on the flip side we could also change things rapidly
            and pivot on a dime when necessary.
          </TSP>
          <RolesDiagram />
        </TSText>
      </TSPlan>
      <TSDesign>
        <TSChapterLabel>UI Design</TSChapterLabel>
        <TSSectionHeadline>
          Rough mockups are cheap to produce.
          <br />
          So I produced a lot.
        </TSSectionHeadline>
        <TSText>
          <TSP>
            During the initial design stages I recommended a process that would
            maximize idea turnover: I drew rough UI ideas on paper, presented
            them in the open to Alec and the team in remote feedback sessions,
            made changes, and repeated the process.
          </TSP>
          <TSP>
            Rough mockups are very cheap to produce and can still contain a lot
            of information, so I tried over a hundred ideas in this rough form
            over about ten days. Out of this process emerged the rough
            specification for the product. We used the spec to inform the next
            design stage: high fidelity static mockups.
          </TSP>
        </TSText>
        <TSImg src={tradespaceAssetPath('wires-framed.png')} alt="" />
        <TSText>
          <TSP>
            Getting the product in front of users early should be the goal of
            any product-focussed startup. Tradespace was no different in this
            respect. I used high fidelity mockups to assemble static prototypes
            in InVision (a prototyping tool) that Alec demoed to selected
            potential users.
          </TSP>
          <TSP>
            Feedback from these early users combined with Alec's experience was
            essential when informing design direction in those early weeks.
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
            During development Alec continued to demo the product to users. We'd
            always roll out features in time for these demos to put them through
            the ultimate test.
          </TSP>
          <TSP>
            It was sometimes surprising that users signed up to buy the product
            before while we were only part way through development. This was a
            good sign, but we knew the work wasn't over yet.
          </TSP>
          <TSP>
            The demo-driven approach was an effective strategy. With every demo
            the product grew more robust. We knew what to proritise, which in
            turn made Tradespace more valuable to potential customers.
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
            Right at the beginning of the project I implemented a continuous
            integration (CI) system to automate deploys whenever I pushed code.
            It’s important to front-load these small automations because their
            benefits will accumulate over time. Saving hours—sometimes days—that
            can be driven back into development.
          </TSP>
        </TSText>
      </TSDev>
      <TSThanks />
    </TSProjectPage>
  );
};

export default TradespaceProject;
