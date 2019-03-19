import styled, { AnyStyledComponent } from 'styled-components';
import { Theme } from '../../styled/theme';

export type HeadingSelect = (
  level?: 'h1' | 'h2' | 'h3' | 'h4'
) => AnyStyledComponent;

export type HeadingStyledProps = {
  theme: Theme;
  marginTop: string;
  marginBottom: string;
};

export const headingEl: HeadingSelect = (level = 'h1') =>
  styled(level)(
    ({ theme: { fonts, ms }, marginBottom, marginTop }: HeadingStyledProps) => {
      const fontSize =
        level === 'h1'
          ? ms.rem(3)
          : level === 'h2'
          ? ms.rem(2)
          : level === 'h3'
          ? ms.rem(1)
          : '1rem';
      return `
      font: ${fonts.c.weight.heavy} ${fontSize} ${fonts.c.family};
      text-transform: uppercase;
      margin-bottom: ${marginBottom ? marginBottom : '0'};
      margin-top: ${marginTop ? marginTop : '0'};
    `;
    }
  );
