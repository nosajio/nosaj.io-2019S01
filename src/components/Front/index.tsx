import * as React from 'react';
import Opener from '../Opener';
import Page from '../Page';
import { FrontMain, NosajIntro, WavesFixed } from './styled';

export interface FrontProps {}

class Front extends React.Component<FrontProps, any> {
  public render() {
    return (
      <FrontMain>
        <WavesFixed />
        <Page.Section>
          <Opener headline="I help startups solve problems and forge great software" />
        </Page.Section>
        <Page.Section topGap={7}>
          <NosajIntro />
        </Page.Section>
      </FrontMain>
    );
  }
}

export default Front;
