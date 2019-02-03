import * as React from 'react';
import Opener from '../Opener';
import Page from '../Page';
import { FrontMain } from './styled';

export interface FrontProps {}

class Front extends React.Component<FrontProps, any> {
  public render() {
    return (
      <FrontMain>
        <Page.Section>
          <Opener headline="I help startups solve problems and forge great software" />
        </Page.Section>
        <Page.Section>
        </Page.Section>
      </FrontMain>
    );
  }
}

export default Front;
