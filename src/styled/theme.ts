import { fonts, Fonts } from './fonts';
import { gridcss, gridfn, cssinnergrid } from './grid';
import ms, { ModScale } from './modularscale';

// Define shape of theme object
export interface Theme {
  // colors: object;
  grid(...args: any): number;
  gridcss(...args: any): string;
  innergrid(...args: any): string;
  fonts: Fonts;
  // ms = modular scale
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
