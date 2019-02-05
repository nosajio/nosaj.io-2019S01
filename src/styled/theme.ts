import { fonts, Fonts } from './fonts';
import { gridcss, gridfn, cssinnergrid } from './grid';
import ms, { ModScale } from './modularscale';

// Define shape of theme object
export interface Theme {
  // colors: object;
  grid(...args: any): number;
  gridcss(cols?: number, unit?: string): string;
  innergrid(...args: any): string;
  fonts: Fonts;
  ms: ModScale;
}

// Define the theme for
const theme: Theme = {
  ms,
  grid: (...args: any) => gridfn(...args),
  gridcss: (...args: any) => gridcss(...args),
  innergrid: (...args: any) => cssinnergrid(...args),
  fonts
};

export default theme;
