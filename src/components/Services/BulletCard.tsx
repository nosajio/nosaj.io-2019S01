import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../styled/theme';

export interface BulletCardProps {
  title?: string;
  children: (string | React.ReactNode)[];
}

const BulletCard: React.FunctionComponent<BulletCardProps> = ({
  children,
  title
}) => {
  return (
    <BulletCardFrame>
      {title && <BulletCardTitle>{title}</BulletCardTitle>}
      <BulletCardList>
        {children.map(c => (
          <li>{c}</li>
        ))}
      </BulletCardList>
    </BulletCardFrame>
  );
};

export default BulletCard;

const BulletCardFrame = styled.div`
  background: white;
  box-shadow: 0 6px 30px 5px rgba(69, 87, 166, 0.27);
  border-radius: 12px;
  padding: ${({ theme }: { theme: Theme }) => theme.ms.rem(1)};

  & + & {
    margin-top: ${({ theme }: { theme: Theme }) => theme.ms.rem(3)};
  }
`;

const BulletCardList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 0 0 ${({ theme }: { theme: Theme }) => theme.ms.rem(1)};
  margin: 0;
  list-style: outside url('/ui/arrow-blue.svg');

  li {
    font-size: 20px;
    padding-left: ${({ theme }: { theme: Theme }) => theme.ms.rem(-2)};
  }

  li + li {
    margin-top: ${({ theme }: { theme: Theme }) => theme.ms.rem(-1)};
  }
`;

const BulletCardTitle = styled.h3`
  ${({ theme }: { theme: Theme }) => `
    font-weight: ${theme.fonts.a.weight.bold};
    font-size: ${theme.ms.rem(1)};
    margin: 0 0 1rem;
  `}
`;
