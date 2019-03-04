import * as React from 'react';
import Page from '../Page';
import styled from 'styled-components';
import { Theme } from '../../styled/theme';

interface TSSectionProps {
  className?: string;
  children: React.ReactNode;
  // Append elements to the section container
  appendedElements?: React.ReactNode[];
}

const TSSection: React.FunctionComponent<TSSectionProps> = ({
  children,
  className,
  appendedElements
}) => {
  return (
    <S className={className}>
      <Page.Grid topGap={0} bottomGap={0}>
        {children}
      </Page.Grid>
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
  padding: ${({ theme }: { theme: Theme }) => theme.ms.rem(3)};
  overflow: hidden;
`;
