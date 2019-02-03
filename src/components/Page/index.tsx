import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import Section, {SectionProps} from './Section';

type PageComponent<P = {}> = React.FunctionComponent & {
  Section: StyledComponent<any, SectionProps>;
};

interface PageProps {}

const Page: PageComponent<PageProps> = props => {
  return <MainFrame {...props} />;
};

Page.Section = Section;

const MainFrame = styled.main`
  
`;

export default Page;
