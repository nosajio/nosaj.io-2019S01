import * as React from 'react';
import noop from '../utils/noop';

type NavigationDisplayProviderValue = {
  showNav: () => void;
  hideNav: () => void;
  toggleNav: () => void;
  isNavActive?: boolean;
};

interface NavigationDisplayProviderProps {}

const defaultState = { showNav: noop, hideNav: noop, toggleNav: noop };

export const NavigationDisplayContext = React.createContext<
  NavigationDisplayProviderValue
>(defaultState);

const NavigationDisplayProvider: React.FunctionComponent<
  NavigationDisplayProviderProps
> = ({ children }) => {
  const [isNavActive, setState] = React.useState<boolean>(false);
  const value: NavigationDisplayProviderValue = {
    isNavActive,
    showNav: () => setState(true),
    hideNav: () => setState(false),
    toggleNav: () => setState(!isNavActive)
  };
  return (
    <NavigationDisplayContext.Provider value={value}>
      {children}
    </NavigationDisplayContext.Provider>
  );
};

export default NavigationDisplayProvider;
