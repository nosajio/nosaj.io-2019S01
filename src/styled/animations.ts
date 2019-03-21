import { keyframes, Keyframes } from 'styled-components';

export const easeOutQuad = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
export const easeInOutQuad = 'cubic-bezier(0.455, 0.03, 0.515, 0.955)';

export const fadeInAnim = keyframes`
  from {
    opacity: 0;
  }
`;

export const fadeSlideInYAnim = (px: number = -30): Keyframes => keyframes`
  from {
    opacity: 0;
    transform: translateY(${px}px);
  }
`;
