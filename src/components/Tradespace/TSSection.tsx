import * as React from 'react';
import Page from '../Page';
import { styled } from '../../styled/theme';
import media from '../../styled/media';

interface TSSectionProps {
  className?: string;
  children: React.ReactNode;
  // Append elements to the section container
  appendedElements?: React.ReactElement<any>[];
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
      {appendedElements &&
        appendedElements.map((el, i) =>
          React.cloneElement(el, { key: `appended-${i}` })
        )}
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
  padding: ${({ theme }) => `${theme.ms.rem(2)} 0`};

  ${media.medium`
    padding: ${({ theme }) => `${theme.ms.rem(3)} 0`};
  `}

  ${media.large`

  `}
`;
