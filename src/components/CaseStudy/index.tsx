import * as React from 'react';
import projectsData, { CaseStudyElementDescription } from '../../projects';
import { fullMarginPrcnt } from '../../styled/grid';
import TopBar from '../TopBar';
import { CSPage, CSContent } from './styled';

export interface CaseStudyProps {
  match: {
    params: any;
  };
}

class CaseStudy extends React.Component<CaseStudyProps, any> {
  public render() {
    const matchSlug = this.props.match.params.slug;
    const projectData = projectsData.find(p => p.slug === matchSlug);
    if (!projectData) {
      return null;
    }

    return (
      <CSPage>
        <TopBar
          light={projectData.lightTopBar || false}
          padding={`${fullMarginPrcnt}vw`}
        />
        <CSContent>{this.renderPageComponents(projectData.page)}</CSContent>
      </CSPage>
    );
  }

  renderPageComponents(page: CaseStudyElementDescription[]): React.ReactNode[] {
    return page.map((p: CaseStudyElementDescription, i: number) => {
      const k = `CSPart${i}`;
      const { Component } = p;
      return <Component forwardKey={k} key={k} {...p.props} />;
    });
  }
}

export default CaseStudy;
