import { Link } from 'react-router-dom';
import theme, { styled } from '../../styled/theme';

export const MobileNavFrame = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.layers.nav};
  width: 100vw;
  height: 100vh;
  background: #f3f1ff;
  padding: 0.5em;
`;

export const MobileNavLinks = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  border: 1px solid black;

  /* The "/" after the links */
  &::after {
    content: '/';
    display: block;
    margin-top: ${({ theme }) => theme.ms.rem(2)};
    font: ${({ theme }) =>
      `${theme.fonts.a.weight.bold} 1rem ${theme.fonts.a.family}`};
  }
`;

export const MobileNavLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font: ${({ theme }) =>
    `${theme.fonts.a.weight.heavy} ${theme.ms.rem(2)} ${theme.fonts.a.family}`};
  * + & {
    margin-top: ${({ theme }) => theme.ms.rem(2)};
  }
`;

export const MobileNavEtc = styled.div`
  position: absolute;
  bottom: 0.25rem;
  font-family: ${({ theme }) => theme.fonts.a.family};
  font-weight: ${({ theme }) => theme.fonts.a.weight.bold};
  font-size: ${({ theme }) => theme.ms.rem(-1)};
  letter-spacing: 4px;
  background: #f3f1ff;
  padding: 2px 1em;
`;
