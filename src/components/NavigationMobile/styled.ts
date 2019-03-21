import { Link } from 'react-router-dom';
import { keyframes } from 'styled-components';
import {
  easeOutQuad,
  fadeInAnim,
  fadeSlideInYAnim
} from '../../styled/animations';
import { styled } from '../../styled/theme';

const navWavesEnterAnim = keyframes`
  from { background-position: 50% -200px; opacity: 0; }
  to { background-position: 50% 50%; }
`;

const borderFadeInAnim = keyframes`
  from { border-color: transparent; }
  to { border-color: white; }
`;

export const MobileNavFrame = styled.div`
  animation: ${navWavesEnterAnim} 300ms 1 both ${easeOutQuad};
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
  background: url('/bg/waves-mobile-nav.svg') no-repeat center / cover,
    linear-gradient(-180deg, #323242 0%, #08080b 90%, #08080b 100%);
  color: white;
  padding: 0.5em;
`;

export const MobileNavLinks = styled.nav`
  animation: ${borderFadeInAnim} 400ms 500ms 1 both ${easeOutQuad};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  border: 1px solid white;

  /* The "/" after the links */
  &::after {
    animation: ${fadeSlideInYAnim(-30)} 500ms 550ms 1 both ${easeOutQuad};
    content: '/';
    display: block;
    margin-top: ${({ theme }) => theme.ms.rem(2)};
    font: ${({ theme }) =>
      `${theme.fonts.a.weight.bold} 1rem ${theme.fonts.a.family}`};
  }
`;

const linksAnimDelayCSS = (arr: number[], n = 100): string => {
  let tpl = ``;
  for (let i = 0; i < arr.length; i++) {
    tpl += `
      &:nth-child(${i}n) {
        animation-delay: ${n * i}ms;
      }
    `;
  }
  return tpl;
};

export const MobileNavLink = styled(Link)`
  animation: ${fadeSlideInYAnim(-30)} 500ms 1 both ${easeOutQuad};
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  font: ${({ theme }) =>
    `${theme.fonts.a.weight.heavy} ${theme.ms.rem(2)} ${theme.fonts.a.family}`};

  ${linksAnimDelayCSS([1, 2, 3, 4], 150)}

  * + & {
    margin-top: ${({ theme }) => theme.ms.rem(2)};
  }
`;

export const MobileNavEtc = styled.div`
  animation: ${fadeInAnim} 200ms 700ms 1 both ${easeOutQuad};
  position: absolute;
  bottom: 0.25rem;
  font-family: ${({ theme }) => theme.fonts.a.family};
  font-weight: ${({ theme }) => theme.fonts.a.weight.bold};
  font-size: ${({ theme }) => theme.ms.rem(-1)};
  letter-spacing: 4px;
  background: #08080b;
  color: white;
  padding: 2px 1em;
`;
