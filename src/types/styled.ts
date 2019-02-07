import { StyledComponent } from 'styled-components';
import { Theme } from '../styled/theme';

export type ThemeProps = HTMLElement & {
  theme: Theme;
};

export type StyledWithProps<P> = StyledComponent<any, P & ThemeProps>;
