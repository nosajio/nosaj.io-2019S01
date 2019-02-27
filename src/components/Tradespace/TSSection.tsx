import * as React from 'react';
import Page from '../Page';
import styled from 'styled-components';

interface TSSectionProps {
  className?: string;
  children: React.ReactNode;
  appendedElements?: React.ReactNode[];
}

const TSSection: React.FunctionComponent<TSSectionProps> = ({
  children,
  className,
  appendedElements
}) => {
  return (
    <S className={className}>
      <Page.Grid>{children}</Page.Grid>
      {appendedElements && appendedElements.map(el => el)}
    </S>
  );
};

export default TSSection;

const S = styled.section`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  overflow: hidden;
`;
