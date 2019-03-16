import baseStyled, { ThemedStyledInterface } from 'styled-components';
import { fonts, Fonts } from './fonts';
import { cssinnergrid, gridcss, gridfn, cssMobileGrid } from './grid';
import ms, { ModScale } from './modularscale';

// Re export `styled` with ThemedStyledInterface to tell typescript about
// our theme signature
export const styled = baseStyled as ThemedStyledInterface<Theme>;

// Tell typescript about the colors and layers objects
type ColorsType = { [K in keyof typeof colors]: typeof colors[K] };
type LayersType = { [K in keyof typeof layers]: typeof layers[K] };

// Define shape of theme object
export interface Theme {
  colors: ColorsType;
  layers: LayersType;
  layout: { maxWidth: number };
  grid(...args: any): number;
  gridcss(cols?: number, unit?: string): string;
  innergrid(cols: number, unit?: string): string;
  mobilegrid(): string;
  fonts: Fonts;
  ms: ModScale;
}

// Define theme values below - - - - - - - - - - - - - - - - - - - - - - - - - -

const colors = {
  red: {
    bright: '#ff5e5e'
  },
  yellow: {
    bright: '#FFE793'
  },
  blue: {
    offwhite: '#EDEBF9',
    pastel: '#D0EAFE',
    bright: '#184AD8',
    greyDark: '#3D3E55',
    black: '#1E1E29'
  },
  purple: {
    offwhite: '#D7BFFF',
    pastel: '#E7DDF6',
    neutral: '#D9C4FA',
    bright: '#9355F6'
  },
  grey: '#575763',
  blackish: '#151628',
  black: '#000'
};

const layers = {
  ceiling: 9000,
  nav: 5500,
  windows: 4900,
  contentMax: 4500,
  background: 0
};

// Assign values to the main theme object
const theme: Theme = {
  ms,
  layers,
  colors,
  layout: {
    maxWidth: 1440
  },
  grid: (...args: any) => gridfn(...args),
  gridcss: (...args: any) => gridcss(...args),
  innergrid: (...args: any) => cssinnergrid(...args),
  mobilegrid: () => cssMobileGrid(),
  fonts
};

export default theme;
