import { Link } from 'react-router-dom';
import { styled } from '../../styled/theme';
import Button from '../Button';

export const NavLink = styled(Link)`
  ${({ theme }) => `
    margin: 0 ${theme.ms.fn(2) / 2}rem;
    font: ${theme.fonts.a.weight.bold} 1rem ${theme.fonts.a.family};
    `}
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
`;

export const NavFrame = styled.nav``;

export const NavBtn = styled(Button)`
  ${NavLink} + &,
  & + & {
    margin-left: ${({ theme }) => (theme.ms.fn(2) - theme.ms.fn(1)) / 2}rem;
  }
`;
