import { fonts, Fonts } from './fonts';
import { gridcss, gridfn, cssinnergrid } from './grid';
import ms, { ModScale } from './modularscale';

// Define shape of theme object
export interface Theme {
  colors: { [name: string]: any };
  layers: { [name: string]: number };
  grid(...args: any): number;
  gridcss(cols?: number, unit?: string): string;
  innergrid(cols: number, unit?: string): string;
  fonts: Fonts;
  ms: ModScale;
}

const colors = {
  yellow: {
    bright: '#FFE793'
  },
  blue: {
    pastel: '#D0EAFE',
    greyDark: '#3D3E55',
    black: '#1E1E29'
  },
  purple: {
    offwhite: '#D7BFFF',
    pastel: '#E7DDF6',
    bright: '#9355F6'
  },
  black: '#000'
};

// Define the theme for
const theme: Theme = {
  ms,
  layers: {
    nav: 5000,
    windows: 4900,
    contentMax: 4500,
    background: 0
  },
  colors,
  grid: (...args: any) => gridfn(...args),
  gridcss: (...args: any) => gridcss(...args),
  innergrid: (...args: any) => cssinnergrid(...args),
  fonts
};

export default theme;
