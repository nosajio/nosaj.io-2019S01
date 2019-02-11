import Page from '../Page';
import styled from 'styled-components';
import { SectionProps } from '../Page/Section';
import { Theme } from '../../styled/theme';
import { StyledWithProps } from '../../types/styled';

export type CSStyledProps = {
  theme: Theme;
};

export const CSPage = styled(Page)``;

export const CSContent = styled.div`
  ${({ theme }: CSStyledProps) => theme.innergrid(12)};
  grid-row-gap: ${({ theme }: CSStyledProps) => theme.ms.rem(3)};
`;
