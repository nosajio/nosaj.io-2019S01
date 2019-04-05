import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import NavigationDisplayProvider, {
  NavigationDisplayContext
} from '../../contexts/NavigationDisplayContext';
import ScrollProvider from '../../contexts/ScrollEventsContext';
import GlobalStyle from '../../styled/globals';
import theme from '../../styled/theme';
import ContactWindow from '../ContactWindow';
import Footer from '../Footer';
import HashRoute from '../HashRoute';
import NavigationMobile from '../NavigationMobile';
import ScrollToTopAuto from '../ScrollToTopAuto';
import routes from './routes';
import OnRouteChangeEvent from '../OnRouteChangeEvent';

declare global {
  interface Window {
    qp: any;
  }
}
export interface AppProps {}

class App extends React.Component<AppProps, any> {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollProvider>
            <NavigationDisplayProvider>
              <ScrollToTopAuto />
              <OnRouteChangeEvent
                onRouteChange={() => {
                  // Pinterest tracking
                  if (window.qp) {
                    window.qp('track', 'Generic');
                  }
                }}
              />
              <GlobalStyle />
              <Switch>
                {routes.map(r => (
                  <Route {...r} />
                ))}
              </Switch>
              {/* Show the contact window above whichever view is matched above */}
              <HashRoute path="#contact" component={ContactWindow} />
              {/* Autoscroll to work on homepage */}
              <HashRoute
                path="#work"
                render={() => {
                  window.setTimeout(() => {
                    const el = document.getElementById('work-anchor');
                    if (!el) {
                      return null;
                    }
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 200);
                  return null;
                }}
              />
              <Footer />
              {/* Show the nav when its context is set to active. TODO if
               *  there's a time when more global state is needed, refactor
               *  the nav showing state into a homogenous global state context
               *  instead.
               */}
              <NavigationDisplayContext.Consumer>
                {({ isNavActive, hideNav }) =>
                  isNavActive && (
                    <NavigationMobile onClickLink={() => hideNav()} />
                  )
                }
              </NavigationDisplayContext.Consumer>
            </NavigationDisplayProvider>
          </ScrollProvider>
        </Router>
      </ThemeProvider>
    );
  }
}
export default App;
