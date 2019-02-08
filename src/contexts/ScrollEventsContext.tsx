import * as React from 'react';
import debounce from 'lodash.debounce';

export interface ScrollProviderState {
  scrollY: number;
}
export interface ScrollProviderProps {}

export type ScrollProviderValue = {
  state: ScrollProviderState;
};

// Init the scroll provider context object
const defaultState: ScrollProviderState = { scrollY: 0 };
export const ScrollContext: React.Context<
  ScrollProviderValue
> = React.createContext({ state: defaultState });

// Create the Provider to hold the scroll state
export default class ScrollProvider extends React.Component<
  ScrollProviderProps,
  ScrollProviderState
> {
  state = defaultState;

  componentDidMount() {
    this.registerScrollEvent();
  }

  componentWillUnmount() {
    this.unregisterScrollEvent();
  }

  public render() {
    const providerValue: ScrollProviderValue = {
      state: this.state
    };
    return (
      <ScrollContext.Provider value={providerValue}>
        {this.props.children}
      </ScrollContext.Provider>
    );
  }

  handleScroll() {
    const scrollY = window.scrollY || 0;
    this.setState({ scrollY });
  }

  debouncedHandleScroll = debounce(() => this.handleScroll(), 200);

  registerScrollEvent() {
    window.addEventListener('scroll', () => this.debouncedHandleScroll());
  }

  unregisterScrollEvent() {
    window.removeEventListener('scroll', () => this.debouncedHandleScroll());
  }
}
